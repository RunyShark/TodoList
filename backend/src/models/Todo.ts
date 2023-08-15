import mongoose, { Model, Schema } from 'mongoose';

export interface Todo {
  id: string;
  title: string;
  description: string;
  col: Col;
}

export type Col = 'pending' | 'completed' | 'inProgress';

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

const EntryModel: Model<Todo> =
  mongoose.models.Todo || mongoose.model('Todo', todoSchema);

export default EntryModel;
