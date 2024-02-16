import Image from "next/image";
import { CTAButtons } from "@/app/(landing)/home/CTAButtons";
import { SquaresPattern } from "@/app/(landing)/home/SquaresPattern";
import { VideoDemo } from "@/app/(landing)/home/VideoDemo";
import { cn } from "@/utils";

export function HeroText(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const { className, ...rest } = props;

  return (
    <h1
      className={cn("font-cal text-4xl text-gray-900 sm:text-6xl", className)}
      {...rest}
    />
  );
}

export function HeroSubtitle(props: { children: React.ReactNode }) {
  return <p className="mt-6 text-lg leading-8 text-gray-600" {...props} />;
}

export function Hero(props: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
}) {
  return (
    <div className="relative pt-14">
      <SquaresPattern />
      <div className="pt-24 sm:pb-12 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <HeroTag /> */}
        </div>

        <div className="mx-auto max-w-xl text-center">
          {/* <HeroText>{props.title || <HeroHeadingAB />}</HeroText> */}
          <HeroText>
            {props.title || "Effortlessly Transform Your Inbox in Minutes"}
          </HeroText>
          <HeroSubtitle>
            {props.subtitle || (
              <>
                Elevate your email experience with quick inbox cleanup. Enjoy
                seamless newsletter management, AI-driven automation, effective
                cold email blocking, and detailed analytics. Take control and
                enhance your email efficiency with Syncade.
              </>
            )}
          </HeroSubtitle>
          <CTAButtons />
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src={props.image || "/images/newsletters.png"}
              alt="Inbox screenshot"
              width={2432}
              height={1442}
              className="rounded-md shadow ring-1 ring-gray-900/10"
            />

            <VideoDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

// function HeroTag() {
//   return (
//     <div className="mb-8 flex justify-center bg-white">
//       <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//         <a
//           href="/product-hunt"
//           className="flex items-center gap-x-1 font-semibold text-blue-600"
//         >
//           <span className="absolute inset-0" aria-hidden="true" />
//           We are live on Product Hunt!
//           <ChevronRightIcon
//             className="-mr-2 h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           />
//         </a>
//       </div>
//     </div>
//   );
// }
