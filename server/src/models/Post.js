import mongoose from 'mongoose';
import mongoosePagination from 'mongoose-paginate-v2';

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    maxlength: 30,
  },
  description: {
    type: String,
    maxlength: 256,
  },
  file: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tags: [String],
  likes: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

PostSchema.plugin(mongoosePagination);

const Post = mongoose.model('Post', PostSchema);

export default Post;
