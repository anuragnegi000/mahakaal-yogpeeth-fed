import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { TextArea1 } from '../../utils';
import { TextArea2 } from '../../utils';

export default function TextArea() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Yoga Capital Rishikesh</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Begin Your Yoga Journey With Mahakaal Yogpeeth ?</h1>
              {/* <p className="mt-6 text-xl leading-8 text-gray-700">
              Excellence in Education: We take pride in providing the best yoga teacher training. Our experienced and certified instructors are dedicated to imparting authentic knowledge, blending traditional wisdom with modern teaching techniques. Whether you are a beginner or an advanced practitioner, our courses cater to all levels, ensuring a comprehensive and enriching learning experience.
              </p> */}
            </div>
          </div>
        </div>
        <div className="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="mb-8 sm:mb-20">
            <img
              className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              src={TextArea1}
              alt="Workflow illustration"
            />
          </div>
          <img
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
            src={TextArea2}
            alt="Workflow illustration"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              {/* <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p> */}
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Excellence in Education.</strong> We are proud to offer top-notch yoga teacher training. Our certified and experienced instructors are committed to sharing authentic knowledge, combining traditional wisdom with contemporary teaching methods. Whether you are a beginner or an advanced practitioner, our courses accommodate all levels, guaranteeing a thorough and enriching learning experience.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comprehensive Programs.</strong>We understand that every individual has a unique journey. To accommodate diverse needs, we offer a range of yoga teacher training programs, including 100, 200, 300, and 500-hour courses. Whether you're seeking a foundational understanding or aiming for advanced expertise, our structured curriculum ensures a seamless progression through the levels of yoga proficiency.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Yoga Retreats.</strong>  B
                    We recognize that each individual's journey is unique. To meet diverse needs, we provide various yoga teacher training programs, including 100, 200, 300, and 500-hour courses. Whether you're looking for a foundational understanding or advanced expertise, our structured curriculum ensures a smooth progression through different levels of yoga proficiency
                  </span>
                </li>
              </ul>
              {/* <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
