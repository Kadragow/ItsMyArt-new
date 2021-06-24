import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { useForm, Controller } from 'react-hook-form';
import {
  Wrapper,
  PostImage,
  PostImagePlaceholder,
  PostInfoForm,
} from './SinglePost.sc';
import CloseIcon from 'components/atoms/CloseIcon';
import { SimpleButton } from 'components/atoms/SimpleButton';
import { api } from 'API';
import allActions from 'redux/actions';

const inputs = [
  {
    name: 'title',
    placeholder: 'Title',
    field: 'input',
    rules: { maxLength: 30 },
  },
  {
    name: 'description',
    placeholder: 'Description',
    field: 'textarea',
    rules: { maxLength: 256 },
  },
];

const PostCreator = ({ toggleModal, file, defaultValue }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(file);
  const { user } = useSelector((state) => state.auth);
  const { handleSubmit, control } = useForm();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles?.length > 0) setImage(acceptedFiles[0]);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  const onImageRemove = () => {
    setImage(null);
  };

  const onSubmit = async (inputs) => {
    console.log(inputs);
    const formData = new FormData();
    formData.append('file', image);
    formData.append('title', inputs.title || '');
    formData.append('description', inputs.description || '');

    try {
      await api.createPost(formData);
      dispatch(allActions.galleryActions.clearPosts());
      toggleModal && toggleModal();
    } catch (err) {
      console.log(err);
    }
  };

  const mappedInputs = inputs.map(({ field: Component, ...input }) => (
    <Controller
      key={input.name}
      name={input.name}
      control={control}
      defaultValue={defaultValue && defaultValue[input.name]}
      rules={input.rules}
      render={({ field }) => (
        <Component
          placeholder={input.placeholder}
          maxLength={input.rules.maxLength}
          {...field}
        />
      )}
    />
  ));

  return (
    <Wrapper>
      {!image && (
        <PostImagePlaceholder {...getRootProps()}>
          <input {...getInputProps()} />
          <div>Drag 'n' drop some files here, or click to select files</div>
        </PostImagePlaceholder>
      )}
      {image && (
        <>
          <PostImage src={URL.createObjectURL(image)} />
          <CloseIcon onClick={onImageRemove} style={{ left: '0' }} />
        </>
      )}
      <PostInfoForm onSubmit={handleSubmit(onSubmit)}>
        <h1>{user?.nickname}</h1>
        {mappedInputs}
        <SimpleButton
          disabled={!Boolean(image)}
          style={{ margin: 'auto auto 0 auto' }}
        >
          Post it!
        </SimpleButton>
      </PostInfoForm>
    </Wrapper>
  );
};

export default PostCreator;
