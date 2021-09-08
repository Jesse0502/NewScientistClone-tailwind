import React from 'react';
import newsImg from '../../images/news.webp';
function NewsReport() {
  return (
    <div className='lg:w-3/4'>
      <h1 className='font-bold text-3xl lg:text-5xl'>
        Ancient lake in Mars’s Gale crater may have actually been a small pond
      </h1>
      <div className='flex mt-3 flex-wrap w-full'>
        {logos.map((logo) => (
          <div className='px-1 self-stretch rounded-full py-2 h-auto w-12 lg:w-20'>
            {logo}
          </div>
        ))}
      </div>
      <div className='mt-5'>
        <span className='font-light text-gray-600 '>
          <span className='font-bold text-gray-800'>Space 6 </span> August 2021
        </span>
      </div>
      <div className='mt-5'>{news}</div>
    </div>
  );
}

export default NewsReport;

const iconStyles = 'h-auto w-6';

const logos = [
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='#1E4297'
    className={iconStyles}
    viewBox='0 0 16 16'>
    <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
  </svg>,
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='#1C9CEA'
    className={iconStyles}
    viewBox='0 0 16 16'>
    <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
  </svg>,
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='#0073B1'
    className={iconStyles}
    viewBox='0 0 16 16'>
    <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
  </svg>,
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='#F74300'
    className={iconStyles}
    viewBox='0 0 16 16'>
    <path d='M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z' />
    <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z' />
  </svg>,
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='lime'
    className={iconStyles}
    viewBox='0 0 16 16'>
    <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z' />
  </svg>,
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='grey'
    className={iconStyles}
    viewBox='0 0 16 16'>
    <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z' />
  </svg>,
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='grey'
    className={iconStyles}
    viewBox='0 0 16 16'>
    <path d='M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z' />
    <path d='M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z' />
  </svg>,
];

const news = (
  <div>
    <span>
      By <span className='text-primary-main'> Leah Crane </span>
    </span>
    <img src={newsImg} alt='img' srcset='' />
    <span className='font-semibold text-xs'>
      The rocks inside Gale crater hint there may not have been a large lake
      there after all
    </span>
    <span className='block font-light text-gray-600 text-xs'>
      NASA/JPL-Caltech/University of Arizona
    </span>
    <p className='text-gray-800 font-light mt-5 leading-6'>
      A purported ancient lake on Mars may have been far smaller than
      researchers thought. NASA’s Curiosity rover has been{' '}
      <span className='text-primary-main'> exploring Gale crater </span>
      for more than eight years, and while early observations suggested the
      entire crater may once have been filled with water, a new analysis implies
      that it just had a series of ponds instead. <br /> <br />
      Previous analyses of data from Curiosity have relied heavily on a measure
      called the chemical index of alteration to determine how rocks were
      weathered over time.{' '}
      <span className='text-primary-main'>Joseph Michalski</span> at the
      University of Hong Kong and his colleagues have suggested that because
      this measure was developed for use on Earth, it may not be valid in the
      extreme Martian climate. <br /> <br />
      Instead, they analysed the concentrations of various compounds that are
      expected to change based on different types of weathering over time. They
      found that some of the layers of rock Curiosity examined did interact with
      water at some point in their past, but more are likely to have formed
      outside of the water.
    </p>
    <div className='my-5 lg:my-10 m-auto bg-gray-200 p-3 rounded lg:text-center lg:w-5/6 text-lg lg:text-lg'>
      <span className=' rounded  text-primary-main'>
        <span className='font-bold text-black'>Read more:</span> Microbes
        burping methane on Mars may be right next to NASA rover
      </span>
    </div>
    <p className='text-gray-800 font-light mt-5 leading-6'>
      “Over hundreds of metres of strata, it seems that the only layers that are
      demonstrably lacustrine [formed in a lake] are the lower few metres,” says
      Michalski. “Of the rocks visited by the rover… the fraction that is
      demonstrably lacustrine is something like 1 per cent.” <br /> <br />
      These rocks were mostly in the lowest few metres of{' '}
      <span className='text-primary-main'> sediments in the crater</span>,
      suggesting the lake was not nearly as deep or extensive as we thought.
      “There was likely a small lake or more likely a series of small lakes in
      the floor of Gale crater, but these were shallow ponds,” says Michalski.{' '}
      <br /> <br />
      The rocks that didn’t form in water appeared to be volcanic, so Michalski
      says that they may have formed out of ash from volcanic eruptions after
      the water in Gale crater had dried up. Observations by other Mars missions
      have hinted that these sediments were deposited by wind, not water, so
      this may solve that mismatch.
    </p>
    <div className='mt-5'>
      <span className='block font-light italic text-gray-700'>
        <span className='font-bold text-gray-800'>Journal reference:</span>{' '}
        Science Advances,{' '}
        <span className='text-primary-main normal-case hover:underline'>
          DOI: 10.1126/sciadv.abh2687{' '}
        </span>
      </span>
      <span className='italic block font-light text-gray-800'>
        Sign up to our free Launchpad newsletter for a voyage across the galaxy
        and beyond, every Friday
      </span>
    </div>
    <div className='flex flex-wrap items-center gap-2 lg:gap-5 mt-5 mb-10'>
      <span className='block font-bold text-gray-900'>
        More on these topics
      </span>{' '}
      <div className=''>
        <button
          color=''
          className='mr-1.5 bg-primary-text w-min py-1 px-2 text-white hover:bg-primary-onHover rounded-md'>
          PLANETS
        </button>
        <button
          color=''
          className='bg-primary-text w-min py-1 px-2 text-white hover:bg-primary-onHover rounded-md'>
          MARS
        </button>
      </div>
    </div>
  </div>
);
