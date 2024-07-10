import { Request, Response } from 'express';
// import { Todo } from '../models/todo';
import { Todo } from '../models/todoModels';

export const getTodos = async (req: Request, res: Response) => {
  const todos = await Todo.findAll();
  res.json(todos);
};

export const addTodo = async (req: Request, res: Response) => {
  const newTodo = await Todo.create(req.body);
  res.status(201).json(newTodo);
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (todo) {
    await todo.update(req.body);
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

export const getTodoById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findByPk(id);
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (todo) {
    await todo.destroy();
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};
