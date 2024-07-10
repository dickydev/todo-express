import { Router } from 'express';
import { getTodos, addTodo, updateTodo, deleteTodo, getTodoById } from '../controller/todoController';

const router = Router();

router.get('/todo', getTodos);
router.post('/todo', addTodo);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);
router.get('/todo/:id', getTodoById)

export default router;
