import Image from "next/image";
import Link from "next/link";

import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import { InfiniteMovingCardss } from "~/app/infiniteMovingCards";
import { HoverEffects } from "~/components/card-hover-effect";
import { PricingCards } from "~/components/price/pricing-cards";
// import { PricingFaq } from "~/components/price/pricing-faq";
import TextGenerateEffects from "~/components/textGenerateEffect";

// import { trpc } from "~/trpc/server";

export default function IndexPage() {
  // const subscriptionPlan = await trpc.stripe.userPlans.query();

  return (
    <>
      <section
        id="saasfly"
        className="container mb-8 space-y-6 py-8 dark:bg-transparent md:pt-12 lg:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Create, grow, and scale your business
          </h1>
          <TextGenerateEffects />

          <Button>
            <Link href={"/contact"}>Contact Us</Link>
          </Button>
        </div>
      </section>

      <section
        id="features"
        className="container bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Services
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Streamline your business with our services, from website design to
            social media management, We offer a wide range of services to help
            you grow your business.
          </p>
        </div>
        <div>
          <HoverEffects />
        </div>
      </section>

      <section
        id="showcase"
        className="container bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Work
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore some of our past projects
          </p>
        </div>
        <div className="mt-12 flex flex-row justify-center gap-0">
          <div className="flex max-w-[58rem] flex-col space-y-4">
            <h2 className="text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              KAYWO
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Website design for interior design and architectural furniture
              company.
            </p>
            <div className="flex h-full flex-col justify-between gap-16">
              <ul className="space-y-4 text-left text-lg font-medium leading-normal">
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>WordPress Website Design</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>CRM integration with ZOHO CRM</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>Woo commerce integration for online shop with stripe</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>Content writing & on-page SEO</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>Social Media Integration</p>
                </li>
              </ul>
            </div>
          </div>
          <Image
            className=""
            src="/images/templates/furnhome2.png"
            alt="furniture-pic"
            width={500}
            height={500}
          ></Image>
        </div>

        <div className="mt-24 flex flex-row-reverse justify-center gap-48">
          <div className="flex max-w-[58rem] flex-col space-y-4">
            <h2 className="text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              RUBICK
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Website design for mens barbershop company.
            </p>
            <div className="flex h-full flex-col justify-between">
              <ul className="space-y-4 text-left text-lg font-medium leading-normal">
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>WordPress Website Design</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>Online Booking</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>Content writing and on-page SEO</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>Social media integration</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>Location integration</p>
                </li>
              </ul>
            </div>
          </div>
          <Image
            src="/images/templates/contact.jpg"
            alt="barber-pic"
            width={500}
            height={500}
          ></Image>
        </div>

        <div className="mt-24 flex flex-row justify-center gap-0">
          <div className="flex max-w-[58rem] flex-col space-y-4">
            <h2 className="text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              CANTIQ
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Website design for a beauty design company.
            </p>
            <div className="flex h-full flex-col justify-between gap-16">
              <ul className="space-y-4 text-left text-lg font-medium leading-normal">
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>WordPress Website Design</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>CRM integration with ZOHO CRM</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>Online Appointment Booking</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>Content writing & initial SEO</p>
                </li>
                <li className="flex items-start">
                  <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                  <p>Social Media Integration</p>
                </li>
              </ul>
            </div>
          </div>
          <Image
            className=""
            src="/images/templates/global-kit-styles.jpg"
            alt="furniture-pic"
            width={500}
            height={500}
          ></Image>
        </div>
      </section>

      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>
        <div className="mx-auto flex flex-row justify-center gap-4 sm:grid-cols-2 md:max-w-[84rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              {/* <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
              </svg> */}
              <div className="space-y-2">
                <h3 className="font-bold">Responsive Design</h3>
                <p className="text-md leading-relaxed tracking-wide text-zinc-400">
                  We make sure your website looks amazing on mobiles & tablets
                  in addition to desktops.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              {/* <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg> */}
              <div className="space-y-2">
                <h3 className="font-bold">SEO-Friendly</h3>
                <p className="text-md leading-relaxed tracking-wide text-zinc-400">
                  We analyze site content and layouts for higher search
                  rankings.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              {/* <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg> */}
              <div className="space-y-2">
                <h3 className="font-bold">Creative Design</h3>
                <p className="text-md leading-relaxed tracking-wide text-zinc-400">
                  Our delivery to you is a beautiful and clean website that your
                  customers will love.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              {/* <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg> */}
              <div className="space-y-2">
                <h3 className="font-bold">Open-source CMS</h3>
                <p className="text-md leading-relaxed tracking-wide text-zinc-400">
                  You will get the most flexible CMS ever with a WordPress
                  website design.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX.
          </p>
        </div> */}
      </section>
      <section
        id="pricing"
        className="flex w-full flex-col gap-16 py-8 md:py-8"
      >
        <PricingCards
        // userId={user?.id}
        // subscriptionPlan={subscriptionPlan}
        // dict={dict.price}
        />
        <hr className="container" />
      </section>
      <section
        id="company"
        className="container mb-8 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <InfiniteMovingCardss />
        </div>
      </section>
    </>
  );
}
