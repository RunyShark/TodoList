import mongoose, { Model, Schema } from 'mongoose';
import { Todo } from '../interfaces';

const todoSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  col: {
    type: String,
    enum: {
      values: ['pending', 'completed', 'inProgress'],
      message: '{VALUE} no es un estado permitido',
    },
    default: 'pending',
  },
});

export const TodoModel: Model<Todo> =
  mongoose.models.TodoModel || mongoose.model('TodoModel', todoSchema);
