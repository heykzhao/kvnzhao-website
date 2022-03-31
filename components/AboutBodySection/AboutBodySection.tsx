import type { NextPage } from "next";
import AboutBodyLinks from "./AboutBodyLink";

interface ChildProps {
  darkMode: boolean;
}

const HeroSection: NextPage<ChildProps> = ({ darkMode }: ChildProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex justify-center bg-light-mode-4 text-black dark:bg-dark-mode-2 dark:text-white">
        <div className="flex max-w-screen-md flex-col p-10 text-lg font-light">
          <div className="pb-5">
            <h2
              id="timeline"
              className="mt-[-70px] pb-3 pt-[70px] text-left text-2xl font-black uppercase text-light-mode-1 dark:text-white sm:text-3xl"
            >
              Timeline
            </h2>
            <div>
              <p className="pb-3">
                {"I was born in "}
                <span className="font-bold">Edison, New Jersey</span>
                {
                  " - where my parents got their start in the US. We didn't stay long, moving to "
                }
                <span className="font-bold">Beijing, China</span>
                {
                  " soon after for my parents' jobs. I'd stay and grow up here until I left for college. "
                }
              </p>
              <p className="pb-3">
                {"In 2013, I travelled across the Pacific to attend "}
                <AboutBodyLinks
                  title="Northwestern University"
                  url="https://www.northwestern.edu"
                />
                {
                  " in Evanston, IL. Throughout my time here, I worked in research labs studying... "
                }
              </p>
              <ul className="list-outside list-disc pl-10 pb-3">
                <li>
                  {"the applications of Metal Organic Framework in the "}
                  <AboutBodyLinks
                    title="Nguyen Lab"
                    url="https://www.nguyengroup.northwestern.edu/"
                  />
                  {" on campus, "}
                </li>
                <li>
                  {"the effects on polymerization with varying catalysts at "}
                  <AboutBodyLinks
                    title="Goodyear"
                    url="https://www.goodyear.com/"
                  />
                  {", "}
                </li>
                <li>
                  {
                    "and the mechanisms for pollution adsoprtion in silicon products at "
                  }
                  <AboutBodyLinks
                    title="Dow Corning"
                    url="https://en.wikipedia.org/wiki/Dow_Corning/"
                  />
                  {". "}
                </li>
              </ul>
              <p className="pb-3">
                {"4 years later, I received a B.S. in "}
                <span className="font-bold">Chemical Engineering</span>
                {" and a minor in "}
                <span className="font-bold">Economics</span>
                {". "}
              </p>
              <p className="pb-3">
                {"In 2017, I moved to "}
                <span className="font-bold">Houston, Texas</span>
                {" to join "}
                <AboutBodyLinks
                  title="ExxonMobil"
                  url="https://www.exxonmobil.com"
                />
                {" as a "}
                <span className="font-bold">Project Engineer</span>
                {
                  ". Here, I spent most of my time in the Brownfield Projects group, where I'd manage smaller projects for the company's North American and West African business units. Some of these projects included..."
                }
              </p>

              <ul className="list-outside list-disc pl-10 pb-3">
                <li>
                  <span className="font-bold">$13M</span>
                  {
                    " offshore topsides modification project in Santa Barbara, CA involving an upgrade to an existing Impressed Current Cathodic Protection system. Oversaw start of construction to handover to operations. "
                  }
                </li>
                <li>
                  <span className="font-bold">$12M</span>
                  {
                    " subsea equipment design, manufacturing, and shipment from Texas to Equitorial Guinea. Oversaw start of design to delivery in-country. "
                  }
                </li>
                <li>
                  <span className="font-bold">$5M</span>
                  {
                    " onshore pipeline concrete mattress design engineering for Chad. "
                  }
                </li>
                <li>
                  <span className="font-bold">$30M</span>
                  {
                    " subsea equipment installation campaign in Santa Barbara, CA. Responsible for developing business case, project objects & strategies, and putting together funding request to begin concept selection. "
                  }
                </li>
                <li>
                  <span className="font-bold">$60M</span>
                  {
                    " subsea equipment installation campaign in Guyana. Supported Lead Project Mgr (see Michael B. below) in developing project plan, project cost and schedule estimates, contractor and procurement interface stragies, and materials used in funding request. "
                  }
                </li>
              </ul>
              <p className="pb-3">
                {
                  "In addition to project management work, I was also given the opportunity to participate in several other business functions through special assignments, including..."
                }
              </p>
              <ul className="list-outside list-disc pl-10 pb-3">
                <li>
                  {
                    "Supporting senior leadership on implementation of a major re-org affect 2,000+ individuals"
                  }
                </li>
                <li>
                  {
                    "Coordinating the onboarding and assimilation of a class of 14 new hires for the company's engineer training program"
                  }
                </li>
                <li>
                  {
                    "Performing an audit and ensuring project controls protocols are followed"
                  }
                </li>
              </ul>
              <p className="pb-3">
                {
                  "In 2020, after 3 exciting years with ExxonMobil, I left the company and the state of Texas to follow my significant other to "
                }
                <span className="font-bold">Cleveland, OH</span>
                {", where she'd start attending medical school. "}
              </p>
              <p className="pb-3">
                {"In Cleveland, I'd join "}
                <AboutBodyLinks title="Sprinly" url="https://www.sprinly.com" />
                {
                  " a vegan meal delivery start-up, where I'd work on Special Projects & Operations in direct support of the company's co-founder and COO. As with being on any small team, I wore many hats. Some notable ones were..."
                }
              </p>
              <ul className="list-outside list-disc pl-10 pb-3">
                <li>
                  {
                    "Leading the company's internal efforts to transition from WordPress/WooCommerce to Shopify in collaboration with a web agency."
                  }
                </li>
                <li>
                  {
                    "Re-developing internal processes, such as order processing, credit & refund tracking, and account management, to ensure business continuity during platform transition."
                  }
                </li>
                <li>
                  {
                    "Overseeing and revamping our packaging and procurement process."
                  }
                </li>
                <li>
                  {"Preparing materials used in fundraising and recruiment."}
                </li>
              </ul>
              <p className="pb-3">
                {
                  "In the middle of 2021, after a year with Sprinly, I decided to take a career break. The reasons were three-fold, and managed to lineup really well in terms of timing. "
                }
              </p>
              <ol className="list-outside list-decimal pl-10 pb-3">
                <li>
                  {
                    "My sister, who was still in Beijing with my parents at the time and attending her freshman year of college remotely due to the pandemic, finally had the opportunity to come back to campus. She'd be in Chicago, and I wanted to be there for her so she can get adjusted and have a support system nearby for her first few months here. "
                  }
                </li>
                <li>
                  {
                    "My significant other had just finished her first year of medical school and was entering summer break. It'd be her one true break in the long journey of medicine, and I wanted to make sure I had the time and flexibility to travel the world and spend time with her. "
                  }
                </li>
                <li>
                  {
                    "My recent work experiences have led to a deep interest in software and web development. I wanted to spend dedicated time to dive deep and upskill myself into this world. "
                  }
                </li>
              </ol>
              <p className="pb-3">
                {
                  "Now, I'm looking for opportunities that can leverage my previous Projects & Operations expertise, with my newfound knowledge in Software, to bring value in my next role. "
                }
              </p>
            </div>
          </div>
          <div className="pb-5">
            <h2
              id="acknowledgements"
              className=" mt-[-70px] pt-[70px] pb-3 text-left text-2xl font-black uppercase text-light-mode-1 dark:text-white sm:text-3xl"
            >
              Acknowledgements
            </h2>
            <div>
              <p className="pb-4">
                {
                  "Some acknowledgements for individuals that made my career better..."
                }
              </p>
              <ul className="list-outside list-disc pl-10">
                <li>
                  <span className="font-bold">Professor SonBinh Nguyen</span>
                  {
                    ", who took a chance on me and opened the door to all my future opportunities. "
                  }
                </li>
                <li>
                  <span className="font-bold">Steve Maples</span>
                  {", who was the best first boss anyone could've asked for. "}
                </li>
                <li>
                  <span className="font-bold">Michael Bullwinkel</span>
                  {
                    ", who was a great mentor and entrusted me with far more responsibility than I deserved at the time. "
                  }
                </li>
                <li>
                  <span className="font-bold">Una Dowey</span>
                  {", who was just an absolute boss in any room she was in. "}
                </li>
                <li>
                  <span className="font-bold">Zhenyan Hua</span>
                  {", who helped me have fun at work. "}
                </li>
                <li>
                  <span className="font-bold">Mary McCann</span>
                  {
                    ", who showed me the tenaciousness it takes to build something from the ground up. "
                  }
                </li>
              </ul>
            </div>
          </div>
          <div className="pb-5">
            <h2
              id="about-this-site"
              className="mt-[-70px] pt-[70px] pb-3 text-left text-2xl font-black uppercase text-light-mode-1 dark:text-white sm:text-3xl"
            >
              About this site
            </h2>
            <div>
              <p className="pb-3">
                {"This site is built using the "}
                <AboutBodyLinks title="Next.js" url="https://nextjs.org" />
                {" framework, and is deployed and hosted by "}
                <AboutBodyLinks title="Vercel" url="https://www.vercel.com" />
                {". My Headless CMS of choice is currently "}
                <AboutBodyLinks title="GraphCMS" url="https://graphcms.com/" />
                {". "}
              </p>
              <p className="pb-3">
                <AboutBodyLinks
                  title="Tailwind CSS"
                  url="https://tailwindcss.com/"
                />
                {
                  " was instrumental in styling the site. Icons and some components come from "
                }
                <AboutBodyLinks
                  title="Heroicons"
                  url="https://heroicons.dev/"
                />
                {" and "}
                <AboutBodyLinks
                  title="HeadlessUI"
                  url="https://headlessui.dev/"
                />
                {", respectively."}
              </p>
              <p className="pb-3">
                {
                  "The site's appearance, content, and layout are heavily influenced by the personal sites of "
                }
                <AboutBodyLinks title="Jonas Downey" url="https://jonas.do/" />
                {", "}
                <AboutBodyLinks
                  title="Adam Wathan"
                  url="https://adamwathan.me/"
                />
                {", "}
                <AboutBodyLinks
                  title="Brian Lovin"
                  url="https://brianlovin.com/"
                />
                {", and "}
                <AboutBodyLinks
                  title="Maxime Heckel"
                  url="https://maximeheckel.com/"
                />
                {". "}
              </p>
              <p className="pb-3">
                {"I have open-sourced this site on "}
                <AboutBodyLinks
                  title="GitHub"
                  url="https://github.com/heykzhao/kvnzhao-website"
                />
                {
                  ". Feel free to take a look at the code, send along any feedback, and even copy it for yourself (would appreciate a credit if you do). "
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
