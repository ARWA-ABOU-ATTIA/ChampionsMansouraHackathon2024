import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobStore } from '../store/jobStore';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const PostJob = () => {
  const navigate = useNavigate();
  const addJob = useJobStore((state) => state.addJob);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    timeInHours: 0,
    tags: '',
    Price:0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addJob({
      ...formData,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
    });
    navigate('/JobListings');
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-8 text-3xl font-bold text-right">إيه مشكلتك ؟</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 text-right">
        <Input
          label="اسم الوظيفة"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          required
        />

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            اوصف الوظيفة
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows={6}
            required
          />
        </div>

        <Input
          type="number"
          label="وقت العمل (الساعات)"
          value={formData.timeInHours}
          onChange={(e) =>
            setFormData({ ...formData, timeInHours: parseInt(e.target.value) || 0 })
          }
          min="0"
          required
        />

<Input
  type="number"
  label="المبلغ (جنيه/الساعه)"
  value={formData.Price || ''} 
  onChange={(e) =>
    setFormData({
      ...formData,
      Price: Math.max(0, parseInt(e.target.value) || 0), 
    })
  }
  min="0" 
  required
/>


        <Input
          label="المواصفات (بفرق فصله)"
          value={formData.tags}
          onChange={(e) =>
            setFormData({ ...formData, tags: e.target.value })
          }
          placeholder="e.g., React, TypeScript, Remote"
          required
        />

        <div className="flex justify-end flex-row-reverse space-x-reverse space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/')}
          >
            ألغي
          </Button>
          <Button type="submit">ارفع مشكلتك</Button>
        </div>
      </form>
    </div>
  );
};