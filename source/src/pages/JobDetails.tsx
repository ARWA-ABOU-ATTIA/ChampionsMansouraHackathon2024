import { useParams, useNavigate } from 'react-router-dom';
import { useJobStore } from '../store/jobStore';
import { Button } from '../components/Button';
import { TagIcon, CalendarIcon, ClockIcon, PoundSterling} from 'lucide-react';


export const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobs = useJobStore((state) => state.jobs);
  const acceptJob = useJobStore((state) => state.acceptJob);
  const userJobs = useJobStore((state) => state.userJobs);

  const job = jobs.find((j) => j.id === id);
  const hasApplied = userJobs.some((j) => j.id === id);

  if (!job) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Job not found</h1>
        <Button
          className="mt-4"
          onClick={() => navigate('/')}
        >
          Back to Listings
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <Button
          variant="outline"
          onClick={() => navigate('/')}
        >
          ← Back to Listings
        </Button>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-sm">
        <div className="mb-6 border-b pb-6">
          <h1 className="mb-4 text-3xl font-bold">{job.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-gray-600">
            <span className="flex items-center space-x-2">
              <ClockIcon className="h-5 w-5" />
              <span>ساعات {job.timeInHours}</span>
            </span>
            <span className="flex items-center space-x-2">
  <PoundSterling className="h-5 w-5" />
  <span>{job.Price ? `${job.Price} ${''} السعر` : 'السعر غير متوفر'}</span>
</span>

            <span className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5" />
              <span>
                نشر {new Date(job.createdAt).toLocaleDateString()}
              </span>
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            وصف الوظيفة
          </h2>
          <p className="whitespace-pre-wrap text-gray-600">
            {job.description}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">مواصفات</h2>
          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center space-x-1 rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
              >
                <TagIcon className="h-4 w-4" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={() => {
              acceptJob(job.id);
              navigate('/profile');
            }}
            disabled={hasApplied}
          >
            {hasApplied ? 'Already Applied' : 'Accept Job'}
          </Button>
        </div>
      </div>
    </div>
  );
};