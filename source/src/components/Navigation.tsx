import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Menu as User, LogOut, Settings, ChevronDown } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';

export const Navigation = () => {
  return (
    <header className="bg-white shadow-md">
  <div className="max-w-9xl mx-auto px-10 sm:px-10 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo Section - Far Left */}
      <div className="flex justify-end flex-row-reverse space-x-reverse space-x-4">
        <div className="text-center flex items-center ">
          <img
            src="src/assets/logo.png" 
            alt="Logo"
            className="w-12 h-auto flex justify-end flex-row-reverse space-x-reverse space-x-4" // Properly sized logo
          />
          <div className="ml-2">
            <p className="text-2xl font-bold text-purple-400">TESLAM</p>
            <p className="text-sm text-purple-600 font-bold mt-1">
              اعملهالي...تسلم
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links - Center */}
      <nav className="hidden md:flex space-x-8">
        <Link
          to="/JobListings"
          className="text-purple-600 hover:text-gray-700 text-sm font-medium"
        >
          ساعد غيرك
        </Link>
        <Link
          to="/JobListings"
          className="text-purple-600 hover:text-gray-700 text-sm font-medium"
        >
          ساعدني
        </Link>
        <Link
          to="/contact-us"
          className="text-purple-600 hover:text-gray-700 text-sm font-medium"
        >
          تواصل معنا
        </Link>
        <Link
          to="/post-job"
          className="text-purple-600 hover:text-gray-700 text-sm font-medium"
        >
          محتاج مساعدة؟
        </Link>
        <Link
          to="/Home"
          className="text-purple-600 hover:text-gray-700 text-sm font-medium"
        >
          الصفحة الرئيسة
        </Link>
      </nav>

      {/* Profile Section - Far Right */}
      <div className="flex items-center space-x-4">
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
          <ChevronDown className="h-4 w-4" />
          <span className="text-sm font-medium">اسم المستخدم</span>
            <img
              src="src/assets/user-avatar.png" 
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
            
            
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/profile"
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } flex items-center px-4 py-2 text-sm text-gray-700`}
                  >
                    <User className="h-5 w-5 ml-2" />
                    الملف الشخصي
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/settings"
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } flex items-center px-4 py-2 text-sm text-gray-700`}
                  >
                    <Settings className="h-5 w-5 ml-2" />
                    الإعدادات
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                  >
                    <LogOut className="h-5 w-5 ml-2" />
                    تسجيل الخروج
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  </div>
</header>

  );
};
