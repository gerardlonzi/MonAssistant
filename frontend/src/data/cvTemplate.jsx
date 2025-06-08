 export function CvTemplate({
    myCvData,
    activeColor = '#1e2939',
    hoverPalette,
    usePicture = true,
    size = 'md', // sm, md, lg
    className = '',
    styleMap = {}
  }){
    const sizeVariants = {
      sm: {
        root: 'w-[12rem] h-[12rem] ',
        text: 'text-sm',
        padding: 'px-4 py-6',
        image: 'w-8 h-8',
        sectionGap: 'mt-4',
      },
      md: {
        root: 'w-[17rem] h-[21rem] overflow-hidden',
        text: 'text-[5px]',
        text_title:"text-[6px]",
        text_name:"text-[8px]",
        padding: 'px-2 py-4',
        image: 'w-16 h-16 mb-2',
        margin_Side:"mt-2 mb-1",
        contactSpaceX:"space-y-[1px]",
        contactContentGap:"gap-1",
        ul_ps:"ps-[10px]"
      },
      lg: {
        root: 'w-[20rem] h-[20rem] ',
        text: 'text-lg',
        padding: 'px-12 py-16',
        image: 'w-14 h-14',
        sectionGap: 'mt-10',
      }
    };
  
    const styles = sizeVariants[size];
  
    return (
      <section className={`flex ${styles.root} ${className} `}>
        {/* LEFT PANEL */}
        <section
          style={{ backgroundColor: hoverPalette || activeColor }}
          className={`${styles.padding} ${styles.text} text-white w-1/3 bg-[#1e2939] ${styleMap.leftPanel || ''}`}
        >
          {usePicture && (
            <div className={`${styles.image} m-auto  `}>
              <img
                className="rounded-full bg-gray-300 border-2 border-white w-full h-full object-cover"
                src={myCvData.img}
                alt="profile"
                loading="lazy"
              />
            </div>
          )}
          <div className="text-center">
            <p className={`font-semibold ${styles.text_name}`}>{myCvData.name}</p>
            <p className={`text-blue-400`}>{myCvData.profession}</p>
          </div>
  
          {/* CONTACT */}
          <section>
            <p className={`font-bold ${styles.text_title} ${styles.margin_Side}`}>CONTACT</p>
            <div className={`${styles.contactSpaceX} `}> 
              {myCvData.contact.map((el, index) => (
                <div key={index} className={`flex ${styles.contactContentGap} `}>
                  <span className="text-blue-400 w-1 h-1">{el.icon}</span>
                  <span>{el.infos}</span>
                </div>
              ))}
            </div>
          </section>
  
          {/* COMPETENCES */}
          <section >
            <p className={`font-bold ${styles.text_title} ${styles.margin_Side}`}>COMPÉTENCES</p>
            <ul className={`list-disc  ${styles.ul_ps}  `}>
              {myCvData.compétences.map((el, index) => (
                <li  key={index}>{el}</li>
              ))}
            </ul>
          </section>
  
          {/* HOBBIES */}
          <section>
            <p className={`font-bold ${styles.text_title} ${styles.margin_Side}`}>HOBBIES</p>
            <ul className={`list-disc  ${styles.ul_ps}  `}>
              {myCvData.hobbies.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </section>
        </section>
  
        {/* RIGHT PANEL */}
        <section className={`w-2/3  flex flex-col bg-white ${styles.text} ${styles.padding}`}>
          {/* PROFILE */}
          <section>
            <p style={{ color: hoverPalette || activeColor }} className={`font-semibold  ${styles.text_title} ${styles.margin_Side}`}>
              PROFILE
            </p>
            <p>{myCvData.profile}</p>
          </section>
  
          {/* EXPERIENCE */}
          <section className={`${styles.margin_Side}`}>
            <p style={{ color: hoverPalette || activeColor }} className={`font-semibold  ${styles.text_title} ${styles.margin_Side}`}>
              EXPERIENCE
            </p>
            {myCvData.experience.map((el, index) => (
              <div key={index} className="mb-2">
                <p className={`font-semibold  ${styles.text_title}`}>{el.poste}</p>
                <div className="flex justify-between">
                  <p>
                    <span>{el.ecole}</span> in <span>{el.lieux}</span>
                  </p>
                  <p>
                    {el.debut} - {el.fin}
                  </p>
                </div>
                <ul className={`list-disc  ${styles.ul_ps}  ${styles.text}`}>
                  {el.Activites.map((act, idx) => (
                    <li key={idx}>{act}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
  
          {/* EDUCATION */}
          <section className="mt-1">
            <p style={{ color: hoverPalette || activeColor }} className={`font-semibold  ${styles.text_title} `}>
              EDUCATION
            </p>
            {myCvData.education.map((el, index) => (
              <div key={index} className="my-1">
                <p className="font-semibold">{el.diplome}</p>
                <p>
                  {el.debut} - {el.fin}
                </p>
                <p>
                  {el.ecole} in {el.lieux}
                </p>
              </div>
            ))}
          </section>
        </section>
      </section>
    );
  };
  

  