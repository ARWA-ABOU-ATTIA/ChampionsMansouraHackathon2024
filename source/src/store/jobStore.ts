import { create } from 'zustand';
import { Job } from '../types/job';

interface JobStore {
  jobs: Job[];
  userJobs: Job[];
  addJob: (job: Omit<Job, 'id' | 'createdAt'>) => void;
  acceptJob: (jobId: string) => void;
  completeJob: (jobId: string) => void;
  cancelJob: (jobId: string) => void;
}

export const useJobStore = create<JobStore>((set) => ({
  jobs: [],
  userJobs: [],
  addJob: (job) =>
    set((state) => ({
      jobs: [
        ...state.jobs,
        {
          ...job,
          id: Math.random().toString(36).substring(7),
          createdAt: new Date(),
        },
      ],
    })),
  acceptJob: (jobId) =>
    set((state) => ({
      userJobs: [
        ...state.userJobs,
        { ...state.jobs.find((job) => job.id === jobId)!, status: 'pending' },
      ],
    })),
  completeJob: (jobId) =>
    set((state) => ({
      jobs: state.jobs.filter((job) => job.id !== jobId),
      userJobs: state.userJobs.map((job) =>
        job.id === jobId ? { ...job, status: 'completed' } : job
      ),
    })),
  cancelJob: (jobId) =>
    set((state) => ({
      userJobs: state.userJobs.filter((job) => job.id !== jobId),
    })),
}));