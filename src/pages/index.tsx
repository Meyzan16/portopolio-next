import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {BsFillMoonStarsFill} from "react-icons/bs"
import {useState} from "react"
import {AiFillLinkedin, AiFillInstagram , AiFillGithub, AiFillMail} from "react-icons/ai"
import deved from "../../public/dev-ed-wave.png"

import design from "../../public/design.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"

import web1 from "../../public/web1.png"
import web2 from "../../public/web2.png"
import web3 from "../../public/web3.png"
import web4 from "../../public/web4.png"
import web5 from "../../public/web5.png"
import web6 from "../../public/web6.png"

export default function Home() {
  const [darkmode, setDarkMode] = useState(false);

  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className="min-h-screen pt-10 pb-32">
            <nav className="flex justify-between">
              <h1 className="text-gray-800 text-xl font-burtons dark:text-white">developyed</h1>
              <ul className="flex items-center">

                  <BsFillMoonStarsFill className="text-gray-800 cursor-pointer text-2xl dark:text-teal-600"  onClick={() => setDarkMode(!darkmode)}/>
                <li>
                  <a className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8" href="#">
                    Resume</a></li>
              </ul>
            </nav>

            <div className="text-center pt-20 md:pt-24 lg:pt-28">
              <h2 className={styles.name}>Meyzan Al Yutra</h2>
              <h2 className="text-gray-800 text-xl py-2 sm:text-2xl dark:text-white">Developer and designer</h2>
              <p className="text-medium leading-8 text-gray-800 sm:text-xl max-w-2xl mx-auto dark:text-white">
                Freelancer providing services for programming and design</p>
            </div>

            <div className="mt-10 lg:mt-8 text-4xl gap-6 flex flex-wrap justify-center text-gray-500 dark:text-white">
                <AiFillLinkedin className={styles.logososmed} />
                <AiFillInstagram  className={styles.logososmed}/>
                <AiFillGithub className={styles.logososmed}/>
                <AiFillMail className={styles.logososmed}/>
            </div>

            
            <div className="mt-10 lg:mt-8 relative bg-gradient-to-b from-teal-500 rounded-full 
              w-60 h-60  mx-auto overflow-hidden lg:w-[16rem] lg:h-[16rem]">
              <Image
                // loader={deved}
                src={deved}
                alt="Picture of the author"
              />
            </div>

          </section>
          
          <section className="pb-16">
              <div>
                <h3 className="text-gray-800 mt-2 text-3xl py-1 font-medium dark:text-white">
                  Services I offer
                </h3>
                <p className="text-md py-2 leading-6 text-gray-800 dark:text-white">
                  since the beginning of my journey as a freelance
                  <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500"> startups</span>  and collaborated with talanted people to create digital 
                  products for both business and cunsumer use
                </p>
              </div>
              <div className="lg:flex gap-6">
                  <div className="p-10 my-10   rounded-lg shadow-xl text-center   hover:bg-teal-500 group dark:bg-white dark:hover:bg-teal-500 ">
                    <Image src={design}  width={100} height={100} alt="design" className="mx-auto" />
                    <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800 mt-2   group-hover:text-white">Beutiful Designs</h3>
                    <p className="text-gray-800 mt-2 py-2 group-hover:text-white">Creating elegant designs suited for your needs design theory</p>
                    <h4 className=" text-teal-500 group-hover:text-white">Design tools I use</h4>
                    <p className="text-gray-800 mt-2 group-hover:text-white">React</p>
                    <p className="text-gray-800 mt-2 group-hover:text-white">Figma</p>
                    <p className="text-gray-800 mt-2 group-hover:text-white">Tailwind</p>
                  </div>

                  <div className="text-center shadow-xl p-10 rounded-lg my-10  hover:bg-teal-500 group dark:bg-white dark:hover:bg-teal-500 ">
                    <Image src={code}  width={100} height={100} alt="design" className="mx-auto" />
                    <h3 className="text-gray-800 mt-2 text-lg font-medium pt-8 pb-2  group-hover:text-white">Beutiful Designs</h3>
                    <p className="text-gray-800 mt-2 py-2 group-hover:text-white">Creating elegant designs suited for your needs design theory</p>
                    <h4 className="text-teal-500 group-hover:text-white">Design tools I use</h4>
                    <p className="text-gray-800 mt-2 group-hover:text-white">React</p>
                    <p className="text-gray-800 mt-2 group-hover:text-white">Figma</p>
                    <p className="text-gray-800 mt-2 group-hover:text-white">Tailwind</p>
                  </div>
              
                  <div className="text-center shadow-xl p-10 rounded-lg my-10 hover:bg-teal-500 group dark:bg-white dark:hover:bg-teal-500">
                    <Image src={consulting}  width={100} height={100} alt="design" className="mx-auto" />
                    <h3 className="text-gray-800 mt-2text-lg font-medium pt-8 pb-2">Beutiful Designs</h3>
                    <p className="text-gray-800 mt-2 py-2  group-hover:text-white">Creating elegant designs suited for your needs design theory</p>
                    <h4 className="text-teal-500  group-hover:text-white">Design tools I use</h4>
                    <p className="text-gray-800 mt-2  group-hover:text-white">React</p>
                    <p className="text-gray-800 mt-2  group-hover:text-white">Figma</p>
                    <p className="text-gray-800 mt-2  group-hover:text-white">Tailwind</p>
                  </div>

              </div>
          </section>

        
          <section className="pb-32">
              <div className="mb-14">
                <h3 className="text-gray-800 mt-2 text-3xl py-1 font-medium dark:text-white">
                  Portopolio
                </h3>
                <p className="text-md py-2 leading-6 text-gray-800 dark:text-white">
                  since the beginning of my journey as a freelance designer and developer
                  <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500"> startups</span>  and collaborated with talanted people to create digital 
                  products for both business and cunsumer use
                </p>
                <p className="text-md py-2 leading-6 text-gray-600 dark:text-white">I offer from a wide range of services, include programming and teaching</p>
              </div>

              <div className="w-full  md:grid md:grid-cols-2  md:gap-8 lg:gap-12  justify-between  ">

                <div className="py-4 md:py-2">
                    <div className="w-full rounded-lg overflow-hidden bg-teal-300  shadow-xl
                                shadow-slate-700 
                          hover:scale-105 transition-all duration-500 ">
                      <Image src={web1} alt="web1"  />
                    </div>
                </div>
                <div className="py-4 md:py-2">
                    <div className="w-full  rounded-lg bg-teal-300  shadow-xl
                                shadow-slate-700 
                          hover:scale-105 transition-all duration-500 overflow-hidden">
                      <Image src={web2} alt="web1"/>
                    </div>
                </div>
            
           
                <div className="py-4 md:py-2">
                    <div className="w-full  shadow-xl
                                shadow-slate-700 
                          hover:scale-105 transition-all duration-500 overflow-hidden rounded-lg">
                      <Image src={web5} alt="web1"   />
                    </div>
                </div>

                <div className="py-4 md:py-2">
                    <div className="w-full  shadow-xl
                                shadow-slate-700 
                          hover:scale-105 transition-all duration-500 overflow-hidden rounded-lg">
                      <Image src={web6} alt="web1"   />
                    </div>
                </div>
               
            </div>
          </section>
      </main>
    </div>
  )
}
