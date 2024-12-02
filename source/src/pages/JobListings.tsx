import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobStore } from '../store/jobStore';
import { TagIcon, ClockIcon, PlusCircleIcon, CalendarIcon, PoundSterlingIcon } from 'lucide-react';
import { Button } from '../components/Button';

export const JobListings = () => {
  const navigate = useNavigate();
  const jobs = useJobStore((state) => state.jobs);
  const [selectedTag, setSelectedTag] = useState<string>('');

  const allTags = Array.from(
    new Set(jobs.flatMap((job) => job.tags))
  ).sort();

  const filteredJobs = selectedTag
    ? jobs.filter((job) => job.tags.includes(selectedTag))
    : jobs;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-purple-400">ساعدني</h1>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-purple-400"
          >
            <option value="">المواصفات</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <Button
            onClick={() => navigate('/post-job')}
            className="flex items-center space-x-2"
          >
            <PlusCircleIcon className="h-5 w-5" />
            <span>ساعدني</span>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h2>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{job.timeInHours} ساعات</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <PoundSterlingIcon className="h-4 w-4" />
                    <span>{job.Price} السعر ج.م</span>
                  </span>
                    <CalendarIcon className="h-4 w-4" />
                  <span>
                    نشر{' '}
                    {new Date(job.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <Button
                size="sm"
                onClick={() => navigate(`/job/${job.id}`)}
              >
                View Details
              </Button>
            </div>

            <p className="mb-4 text-gray-600">
              {job.description.slice(0, 200)}
              {job.description.length > 200 ? '...' : ''}
            </p>

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
        ))}

        {filteredJobs.length === 0 && (
          <div className="rounded-lg bg-white p-8 text-center">
            <p className="text-gray-500">.لا يوجد وضائف متاحة</p>
          </div>
        )}
      </div>
    </div>
  );
};