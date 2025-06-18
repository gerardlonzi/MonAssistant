export function Template001({
  myCvData,
  activeColor = '#1e2939',
  hoverPalette,
  usePicture = true,
  size = 'md', // sm, md, lg
  className = '',
  styleMap = {}
}) {
  const sizeVariants = {
    sm: {
      root: 'w-[15rem] h-[21rem] overflow-hidden',
      text: 'text-[5px]',
      text_title: "text-[6px]",
      text_name: "text-[8px]",
      padding: 'px-2 py-4',
      image: 'w-16 h-16 mb-2',
      margin_Side: "mt-1 mb-1",
      contactSpaceX: "space-y-[1px]",
      contactContentGap: "gap-1",
      ul_ps: "ps-[10px]",
      iconSize: "w-1 h-1"
    },
    md: {
      root: 'w-[20rem] h-[28rem] ',
      text: 'text-[6.5px]',
      text_title: "text-[7px]",
      text_name: "text-[10px]",
      padding: 'px-3 py-5',
      image: 'w-20 h-20 mb-2',
      margin_Side: "mt-3 mb-1",
      contactSpaceX: "space-y-[2px]",
      contactContentGap: "gap-1 items-center",
      ul_ps: "ps-[10px]",
      iconSize: "w-[0.4rem] h-[0.4rem]"

    },
    lg: {
      root: 'w-[25rem] h-[34rem] ',
      text: 'text-[8px]',
      text_title: "text-[8px]",
      text_name: "text-[10px]",
      padding: 'px-4 py-6',
      image: 'w-22 h-22 mb-2',
      margin_Side: "mt-4 mb-1",
      contactSpaceX: "space-y-[7px]",
      contactContentGap: "gap-2 items-center",
      ul_ps: "ps-[10px]",
      iconSize: "w-2 h-2"
    },
    xl: {

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
                <span className={`text-blue-400 ${styles.iconSize}`}>{el.icon}</span>
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
              <li key={index}>{el}</li>
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
            EXPÉRIENCES PROFESSIONNELLES
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
            FORMATIONS
          </p>
          {myCvData.formation.map((el, index) => (
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
        <section className="mt-1">
          <p style={{ color: hoverPalette || activeColor }} className={`font-semibold  ${styles.text_title} `}>
            PARCOURS SCOLAIRE
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







export function Template002({
  myCvData,
  activeColor = '#08084d',
  hoverPalette,
  usePicture = true,
  size = 'md',
  className = '',
  styleMap = {},
}) {
  const sizeVariants = {
    sm: {
      root: 'w-[15rem] h-[21rem] overflow-hidden',
      text: 'text-[5px]',
      text_title: " text-[7px] mt-[6px] font-bold ",
      text_content_ul: "list-disc ml-2",
      text_under_title_leftSide: "mt-[2px] space-y-[1.5px] text-gray-300",
      padding_left_side: 'px-2 py-2',
      image: 'w-16 h-16 mb-[9px]',
      hr_marge: "mt-2",
      width_left_side:"w-[7rem]",

      text__title_second_rightSide: " text-[7px] mt-[2px]  gap-[3px]",
      circle__title_second_rightSide: "size-[5px] bg-[#08084d] rounded-full",
      text_date: "text-[5px] uppercase mt-[1px]",
      text_name: "text-[16px] text-[#08084d]",
      text_profession: "text-[10px]  text-[#08084d]",
      padding_right_side: 'pt-[20px] px-[10px]',
      margin_content_under_title: "mt-[1px] ",
      margin_content_under_title_second: "mt-[2px]",
    },
    md: {
      root: 'w-[20rem] h-[28rem] ',
      text: 'text-[6px]',
      text_title: " text-[8px] mt-[7px] font-bold ",
      text_content_ul: "list-disc ml-2",
      text_under_title_leftSide: "mt-[7px] space-y-[1.5px] text-gray-300",
      padding_left_side: 'px-3 py-3',
      image: 'w-20 h-20 mb-[9px]',
      hr_marge: "mt-2",
      width_left_side:"w-[8rem]",


      text__title_second_rightSide: " text-[8px] mt-[3px]  gap-[3px]",
      circle__title_second_rightSide: "size-[5px] bg-[#08084d] rounded-full",
      text_date: "text-[5px] uppercase mt-[1px]",
      text_name: "text-[19px] text-[#08084d]",
      text_profession: "text-[12px]  text-[#08084d]",
      padding_right_side: 'pt-[25px] px-[12px]',
      margin_content_under_title: "mt-[1px] ",
      margin_content_under_title_second: "mt-[3px]",

    },
    lg: {
      root: 'w-[25rem] h-[34rem] ',
      text: 'text-[8px]',
      text_title: " text-[10px] mt-[8px] font-bold ",
      text_content_ul: "list-disc ml-2",
      text_under_title_leftSide: "mt-[10px] space-y-[1.5px] text-gray-300",
      padding_left_side: 'px-4 py-4',
      image: 'w-[6.5rem] h-[6.5rem] mb-[9px]',
      hr_marge: "mt-[10px]",
      width_left_side:"w-[12rem]",


      text__title_second_rightSide: " text-[9px] mt-[4px]  gap-[3px]",
      circle__title_second_rightSide: "size-[5px] bg-[#08084d] rounded-full",
      text_date: "text-[7px] uppercase mt-[2px]",
      text_name: "text-[25px] text-[#08084d]",
      text_profession: "text-[15px]  text-[#08084d]",
      padding_right_side: 'pt-[30px] px-[15px]',
      margin_content_under_title: "mt-[2px] ",
      margin_content_under_title_second: "mt-[4px]",
    },
    xl: {

    }
  };

  const styles = sizeVariants[size];

  return (
    <section className={`flex ${styles.root} ${styles.text}`}>
      <section style={{ backgroundColor: hoverPalette || activeColor }}
        className={`${styles.padding}  ${styles.padding_left_side} ${styles.padding_left_side} text-white  bg-[#08084d] ${styles.width_left_side} ${styleMap.leftPanel || ''}`} >
        <section>
          {
            usePicture &&
            <div className={`${styles.image} m-auto `}>
              <img className='object-cover h-full w-full' src="/imgs/mirabel.jpg" alt="profile picture  " />
            </div>
          }
        </section>
        <section>
          <p className={` ${styles.text_title}`}>INFORMATIONS</p>
          <div className={` ${styles.text_under_title_leftSide}`}>
            {
              myCvData.contact.map((el, index) =>
                <div key={index} ><span>{el.infos}</span></div>
              )
            }
          </div>
        </section>
        <hr className={`${styles.hr_marge}`} />
        <section>
          <p className={`${styles.text_title}`}>COMPÉTENCES</p>
          <ul className={`${styles.text_content_ul} ${styles.text_under_title_leftSide}`}>
            {
              myCvData.compétences.map((el, index) =>
                <li key={index}>{el}</li>
              )
            }
          </ul>
        </section>
        <hr className={`${styles.hr_marge}`} />
        <section>
          <p className={` ${styles.text_title}`}>LANGUE(S)</p>
          <div className={` ${styles.text_under_title_leftSide}`}>
            {
              myCvData.languages.map((el, index) =>
                <p key={index}>{el}</p>
              )
            }
          </div>
        </section>
        <hr className={`${styles.hr_marge}`} />
        <section>
          <p className={` ${styles.text_title}`}>INTERÊTS</p>
          <div className={` ${styles.text_under_title_leftSide}`}>
            {
              myCvData.hobbies.map((el, index) =>
                <p key={index}>{el}</p>
              )
            }
          </div>
        </section>
      </section>
      <section className={`${styles.padding_right_side} bg-white w-full flex flex-col`}>
        <section>
          <p style={{ color: hoverPalette || activeColor }} className={` font-semibold ${styles.text_name}`}>{myCvData.name}</p>
          <p style={{ color: hoverPalette || activeColor }} className={`${styles.text_profession} uppercase`}>{myCvData.profession}</p>
          <p className={`${styles.margin_content_under_title_second}`}>{myCvData.profile}</p>
        </section>

        <section>
          <p style={{ color: hoverPalette || activeColor }} className={`${styles.text_title} text-[#08084d]`}>EXPÉRIENCES PROFESSIONNELLES</p>
          <div>{myCvData.experience.map((el, index) =>
            <div>
              <div className={`font-bold  flex items-center ${styles.text__title_second_rightSide}`}><div style={{ backgroundColor: hoverPalette || activeColor }} className={`${styles.circle__title_second_rightSide} `}></div><span>{el.poste} á Douala</span> </div>
              <div className={`flex justify-between flex-col ${styles.margin_content_under_title_second}`}>
                <p className={`${styles.text_date}`}><span>{el.debut}</span> - <span>{el.fin}</span></p>
                <ul className={`${styles.text_content_ul} ${styles.margin_content_under_title}`}>
                  {
                    el.Activites.map((i, n) => <li key={n}>{i}</li>)
                  }
                </ul>
              </div>
            </div>
          )}
          </div>

        </section>
        <section>
          <p style={{ color: hoverPalette || activeColor }} className={`text-[#08084d] ${styles.text_title}`}>FORMATIONS</p>

          <div>{myCvData.formation.map((el, index) =>
            <div>
              <p className={`font-bold  flex items-center ${styles.text__title_second_rightSide}`}><div style={{ backgroundColor: hoverPalette || activeColor }} className={`${styles.circle__title_second_rightSide} `}></div><span>{el.diplome}</span> </p>
              <div className={`flex justify-between flex-col ${styles.margin_content_under_title_second}`}>
                <p className={`${styles.text_date}`}><span>{el.debut}</span> - <span>{el.fin}</span></p>
                <p className={`${styles.margin_content_under_title}`}>
                  {el.ecole} á  {el.lieux}
                </p>
              </div>
            </div>
          )}
          </div>
        </section>
        <section>
          <p style={{ color: hoverPalette || activeColor }} className={`${styles.text_title} text-[#08084d]`}>EDUCATION</p>

          <div>{myCvData.education.map((el, index) =>
            <div>
              <p className={`font-bold  flex items-center ${styles.text__title_second_rightSide}`}><div style={{ backgroundColor: hoverPalette || activeColor }} className={`${styles.circle__title_second_rightSide} `}></div><span>{el.diplome}</span> </p>
              <div className={`flex justify-between flex-col ${styles.margin_content_under_title_second}`}>
                <p className={`${styles.text_date}`}><span>{el.debut}</span> - <span>{el.fin}</span></p>
                <p className={`${styles.margin_content_under_title}`}>
                  {el.ecole} á  {el.lieux}
                </p>
              </div>
            </div>
          )}
          </div>
        </section>

      </section>

    </section>
  );
};



export function Template003({
  myCvData,
  activeColor = '#08084d',
  hoverPalette,
  usePicture = true,
  size = 'md',
  className = '',
  styleMap = {},
}) {
  const sizeVariants = {
    sm: {
      root: 'flex w-[15rem] h-[21rem] overflow-hidden',
      leftPanel: 'w-[6rem] bg-[#08084d] text-white px-4 py-6 flex flex-col items-center',
      rightPanel: 'w-[9rem] bg-white text-gray-700 px-6 py-6',
      image: 'w-16 h-16 rounded-full mx-auto mb-4',
      title: 'text-xs font-semibold mb-2',
      content: 'text-[8px] mb-3',
      list: 'list-disc ml-4 text-xs',
      sectionTitle: 'text-xs font-semibold text-[#08084d]',
    },
    md: {
      root: 'flex w-[20rem] h-[28rem] overflow-hidden',
      leftPanel: 'w-[8rem] bg-[#08084d] text-white px-5 py-8 flex flex-col items-center',
      rightPanel: 'w-[12rem] bg-white text-gray-700 px-7 py-8',
      image: 'w-20 h-20 rounded-full mx-auto mb-5',
      title: 'text-sm font-semibold mb-2',
      content: 'text-[12px] mb-4',
      list: 'list-disc ml-5 text-sm',
      sectionTitle: 'text-sm font-semibold text-[#08084d]',
    },
    lg: {
      root: 'flex w-[25rem] h-[34rem] overflow-hidden',
      leftPanel: 'w-[10rem] bg-[#08084d] text-white px-6 py-10 flex flex-col items-center',
      rightPanel: 'w-[15rem] bg-white text-gray-700 px-8 py-10',
      image: 'w-24 h-24 rounded-full mx-auto mb-6',
      title: 'text-lg font-semibold mb-3',
      content: 'text-[14px] mb-5',
      list: 'list-disc ml-6 text-lg',
      sectionTitle: 'text-lg font-semibold text-[#08084d]',
    },
  };

  const styles = sizeVariants[size];

  return (
    <section className={`${styles.root} ${className}`}>
      {/* Section gauche */}
      <section className={styles.leftPanel}>
        {usePicture && (
          <div className={styles.image}>
            <img src="/imgs/mirabel.jpg" alt="profile picture" className="object-cover w-full h-full rounded-full" />
          </div>
        )}
        <p className={styles.title}>Contact</p>
        <div className={styles.content}>
          {myCvData.contact.map((el, index) => (
            <p key={index}>{el.infos}</p>
          ))}
        </div>
        <p className={styles.title}>Compétences</p>
        <ul className={styles.list}>
          {myCvData.compétences.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </section>

      {/* Section droite */}
      <section className={styles.rightPanel}>
        <p className={styles.title} style={{ color: hoverPalette || activeColor }}>{myCvData.name}</p>
        <p className="text-sm text-[#08084d]">{myCvData.profession}</p>
        <p className={styles.content}>{myCvData.profile}</p>

        <p className={styles.sectionTitle} style={{ color: hoverPalette || activeColor }}>Expériences</p>
        {myCvData.experience.map((el, index) => (
          <div key={index} className="mb-4">
            <div className="font-semibold flex items-center">
              <span>{el.poste}</span>
              <span className="text-sm text-gray-500 ml-2">({el.debut} - {el.fin})</span>
            </div>
            <ul className={styles.list}>
              {el.Activites.map((activity, activityIndex) => (
                <li key={activityIndex}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}

        <p className={styles.sectionTitle} style={{ color: hoverPalette || activeColor }}>Formations</p>
        {myCvData.formation.map((el, index) => (
          <div key={index} className="mb-4">
            <div className="font-semibold">{el.diplome}</div>
            <p className="text-sm text-gray-500">{el.ecole} - {el.lieux}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
