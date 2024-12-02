import { useJobStore } from '../store/jobStore';
import { Button } from '../components/Button';
import { CheckCircleIcon, XCircleIcon } from 'lucide-react';

export const UserProfile = () => {
  const userJobs = useJobStore((state) => state.userJobs);
  const completeJob = useJobStore((state) => state.completeJob);
  const cancelJob = useJobStore((state) => state.cancelJob);

  const pendingJobs = userJobs.filter(
    (job) => job.status === 'pending'
  );
  const completedJobs = userJobs.filter(
    (job) => job.status === 'completed'
  );

  return (
    <div className="mx-auto max-w-3xl">
      {/* Row 1: User Profile */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="./src\assets\user-avatar.png" 
          alt="User Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold">اسم المستخدم</h1>
      </div>

      {/* Row 2: Pending Jobs */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-right">
          الوظائف المعلقة ({pendingJobs.length})
        </h2>
        <div className="space-y-4">
          {pendingJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {job.timeInHours} hours
                </p>
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => cancelJob(job.id)}
                >
                  <XCircleIcon className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={() => completeJob(job.id)}
                >
                  <CheckCircleIcon className="mr-2 h-4 w-4" />
                  Mark as Complete
                </Button>
              </div>
            </div>
          ))}
          {pendingJobs.length === 0 && (
            <p className="text-center text-gray-500">
              .فاضي
            </p>
          )}
        </div>
      </section>

      {/* Row 3: Dashboard */}
      {/* Row 3: Dashboard */}
<section className="mb-8">
  <h2 className="mb-4 text-xl font-semibold text-right">
    النشاط
  </h2>
  <div className="grid grid-cols-2 gap-4">
    {/* Rectangle 1 */}
    <div className="flex flex-col items-center justify-center rounded-lg bg-purple-300 p-6 shadow-md">
      <h3 className="text-lg font-bold text-purple-700">الوظائف المكتملة</h3>
      <p className="mt-2 text-2xl font-bold text-blue-900">
        {completedJobs.length}
      </p>
    </div>

    {/* Rectangle 2 */}
    <div className="flex flex-col items-center justify-center rounded-lg bg-purple-400 p-6 shadow-md">
      <h3 className="text-lg font-bold text-purple-700">الوظائف المعلقة</h3>
      <p className="mt-2 text-2xl font-bold text-green-900">
        {pendingJobs.length}
      </p>
    </div>

    {/* Rectangle 3 */}
    <div className="flex flex-col items-center justify-center rounded-lg bg-purple-100 p-6 shadow-md">
      <h3 className="text-lg font-bold text-purple-700">ساعات العمل الكلية</h3>
      <p className="mt-2 text-2xl font-bold text-yellow-900">
        {completedJobs.reduce((sum, job) => sum + job.timeInHours, 0)} ساعة
      </p>
    </div>

    {/* Rectangle 4 */}
    <div className="flex flex-col items-center justify-center rounded-lg bg-purple-200 p-6 shadow-md">
      <h3 className="text-lg font-bold text-purple-700">الجلسات النشطة</h3>
      <p className="mt-2 text-2xl font-bold text-red-900">2</p>
    </div>
  </div>
</section>


      {/* Row 4: Completed Jobs */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-right">
          خلصانه ({completedJobs.length})
        </h2>
        <div className="space-y-4">
          {completedJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-lg bg-white p-6 shadow-sm opacity-75"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {job.timeInHours} hours
                  </p>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                  Completed
                </span>
              </div>
            </div>
          ))}
          {completedJobs.length === 0 && (
            <p className="text-center text-gray-500">
              .فاضي
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
