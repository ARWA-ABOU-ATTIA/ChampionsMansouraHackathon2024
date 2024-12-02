export interface Job {
  id: string;
  title: string;
  description: string;
  timeInHours: number;
  tags: string[];
  createdAt: Date;
  Price: number;
  status?: 'pending' | 'completed';
}