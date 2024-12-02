import { ArrowRight, HandHeart } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-gray-100 text-gray-800" dir="rtl">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200 center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center text-gray-800">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              <span>مرحباً بك , في منصة <span className="text-gray-800">تسلم</span></span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              نحن هنا لنجعل حياتك أسهل وأكثر إنتاجية.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                href="/JobListings"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500"
              >
                احتاج مساعدة
                <ArrowRight className="mr-2 h-5 w-5" />
              </a>
              <a
                href="/JobListings"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500"
              >
                أريد أن أساعد
                <HandHeart className="mr-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">إيه اللي بيخلينا مميزين؟</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-right">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/31/1c/e0/311ce045-a95d-2295-a080-80edf2852758/AppIcon-1x_U007emarketing-0-10-0-85-220-0.png/1200x630wa.png"
                alt="Feature 1"
                className="h-48 w-full object-cover rounded-lg shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">تجربة آمنة وموثوقة</h3>
              <p className="mt-2 text-sm text-gray-600 text-right">
                نقدم تجربة مستخدم مميزة بأعلى معايير الأمان والشفافية.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-right">
              <img
                src="https://www.shutterstock.com/image-photo/businessmen-shaking-hands-business-concept-260nw-2457320921.jpg"
                alt="Feature 2"
                className="h-48 w-full object-cover rounded-lg shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">تبادل الخدمات بكل سهولة</h3>
              <p className="mt-2 text-sm text-gray-600 text-right">
                نقدم منصة متكاملة لتبادل الخدمات باستخدام أرصدة الوقت.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-right">
              <img
                src="https://www.shutterstock.com/image-illustration/arab-union-map-countries-3d-260nw-1941281734.jpg"
                alt="Feature 3"
                className="h-48 w-full object-cover rounded-lg shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">البرنامج الأول والوحيد في الوطن العربي</h3>
              <p className="mt-2 text-sm text-gray-600 text-right">أول منصة لتبادل الوقت في العالم العربي!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white" dir="rtl">
        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-right">
              <h3 className="text-lg font-semibold">تسلم</h3>
              <p className="mt-2 text-sm">
                منصة تسلم لتبادل الوقت والخدمات، لمجتمع أكثر تعاوناً.
              </p>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold">روابطنا</h3>
              <ul className="mt-2 text-sm space-y-2">
                <li>الرئيسية</li>
                <li>من نحن</li>
                <li>الخدمات</li>
                <li>المدونة</li>
              </ul>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold">خدماتنا</h3>
              <ul className="mt-2 text-sm space-y-2">
                <li>إدارة الوقت</li>
                <li>حلول تبادل</li>
                <li>تطوير مجتمع</li>
              </ul>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold">روابط أخرى</h3>
              <ul className="mt-2 text-sm space-y-2">
                <li>الأسئلة الشائعة</li>
                <li>سياسة الخصوصية</li>
                <li>الشروط والأحكام</li>
              </ul>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold">تواصل معنا</h3>
              <ul className="mt-2 text-sm space-y-2">
                <li>+123-456-789</li>
                <li>info@teslam.com</li>
                <li>الرياض، السعودية</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
