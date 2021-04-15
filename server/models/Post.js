import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
  title: String,
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

const Post = mongoose.model('Post', PostSchema);

export default Post;
