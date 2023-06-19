import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  title: string;
  description: string;
}

const PORT = 3000;

const app = express();
app.use(express.json());

let tasks: Task[] = [];

// Membuat tugas baru
app.post('/tasks', async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
    };
    await tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }

});

// Mengambil daftar semua tugas
app.get('/tasks', async (req: Request, res: Response) => {
  try {
    await res.json(tasks);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Mengambil detail tugas berdasarkan ID
app.get('/tasks/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const task = await tasks.find((t) => t.id === id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: 'Tugas tidak ditemukan' });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }

});

// Mengubah tugas berdasarkan ID
app.patch('/tasks/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const task = await tasks.find((t) => t.id === id);
    if (task) {
      task.title = title || task.title;
      task.description = description || task.description;
      res.json(task);
    } else {
      res.status(404).json({ message: 'Tugas tidak ditemukan' });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }

});

// Menghapus tugas berdasarkan ID
app.delete('/tasks/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const taskIndex = await tasks.findIndex((t) => t.id === id);
    if (taskIndex !== -1) {
      const deletedTask = tasks.splice(taskIndex, 1);
      res.json(deletedTask[0]);
    } else {
      res.status(404).json({ message: 'Tugas tidak ditemukan' });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }

});

app.listen(PORT, () => {
  console.log(`Server berjalan pada port : ${PORT}`);
});
