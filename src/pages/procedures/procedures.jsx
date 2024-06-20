import Navbar from "../../components/navbar/Navbar";
import "./procedures.scss";
import React from 'react';

const procedures = [
  {
    name: "Appendectomy",
    description: "An appendectomy is the surgical removal of the appendix, a small tube that branches off the large intestine, to treat acute appendicitis. Appendicitis is the acute inflammation of this tube due to infection."
  },
  {
    name: "Breast Biopsy",
    description: "A biopsy is a diagnostic test involving the removal of tissue or cells for examination under a microscope. This procedure is also used to remove abnormal breast tissue. A biopsy may be done using a hollow needle to extract tissue (needle biopsy), or a lump may be partially or completely removed (lumpectomy) for examination and/or treatment."
  },
  {
    name: "Carotid Endarterectomy",
    description: "Carotid endarterectomy is a surgical procedure to remove blockage from carotid arteries, the arteries located in the neck that supply blood to the brain. Left untreated, a blocked carotid artery can lead to a stroke."
  },
  {
    name: "Cataract Surgery",
    description: "Cataracts cloud the normally clear lens of the eyes. Cataract surgery involves the removal of the cloudy lens, which is replaced with a clear artificial lens implant."
  },
  {
    name: "Cesarean Section",
    description: "Cesarean section is the surgical delivery of a baby by an incision through the mother's abdomen and uterus. This procedure is done when doctors determine it a safer alternative than a vaginal delivery for the mother, baby, or both."
  },
  {
    name: "Cholecystectomy",
    description: "A cholecystectomy is surgery to remove the gallbladder (a pear-shaped sac near the right lobe of the liver that holds bile). A gallbladder may need to be removed if the organ is prone to troublesome gallstones, if it is infected, or becomes cancerous."
  },
  {
    name: "Coronary Artery Bypass",
    description: "Most commonly referred to as simply 'bypass surgery,' this surgery is often done in people who have angina (chest pain) and coronary artery disease (where plaque has built up in the arteries). During the surgery, a bypass is created by grafting a piece of a vein above and below the blocked area of a coronary artery, enabling blood to flow around the obstruction. Veins are usually taken from the leg, but arteries from the chest may also be used to create a bypass graft."
  },
  {
    name: "Debridement of Wound, Burn, or Infection",
    description: "Debridement involves the surgical removal of foreign material and/or dead, damaged, or infected tissue from a wound or burn. By removing the diseased or dead tissue, healthy tissue is exposed to allow for more effective healing."
  },
  {
    name: "Dilation and Curettage (D&C)",
    description: "A D&C is a minor operation in which the cervix is dilated (expanded) so that the cervical canal and uterine lining can be scraped with a curette (spoon-shaped instrument)."
  },
  {
    name: "Free Skin Graft",
    description: "A skin graft involves detaching healthy skin from one part of the body to repair areas of lost or damaged skin in another part of the body. Skin grafts are often done as a result of burns, injury, or surgical removal of diseased skin. They are most often done when the area is too large to be repaired by stitching or natural healing."
  },
  {
    name: "Hemorrhoidectomy",
    description: "A hemorrhoidectomy is the surgical removal of hemorrhoids, distended veins in the lower rectum or anus."
  },
  {
    name: "Hysterectomy",
    description: "A hysterectomy is the surgical removal of a woman's uterus. This may be done laparoscopically through an abdominal incision or vaginally. The ovaries may be removed at the same time."
  },
  {
    name: "Hysteroscopy",
    description: "Hysteroscopy is a surgical procedure used to help diagnose and treat many uterine disorders. The hysteroscope (a viewing instrument inserted through the vagina for a visual exam of the canal of the cervix and the interior of the uterus) can transmit an image of the uterine canal and cavity to a television screen."
  },
  {
    name: "Inguinal Hernia Repair",
    description: "Inguinal hernias are when the small intestine bulges through a weak area in the lower abdominal muscles. An inguinal hernia occurs in the groin. Surgical repair pulls the intestine back to its original location."
  },
  {
    name: "Low Back Pain Surgery",
    description: "Low back pain can have various causes, including abnormal development of the backbone, stress on the back, injury, or a physical disorder that affects the bones of the spine. Usually, surgery is not considered until other options have been exhausted, including rest, medication, and mild exercise. The type of surgery done on the back depends on the diagnosis."
  },
  {
    name: "Mastectomy",
    description: "A mastectomy is the removal of all or part of the breast. Mastectomies are usually done to treat breast cancer. There are several types of mastectomies, including the following:\n\nPartial (segmental) mastectomy involves the removal of the breast cancer and a larger portion of the normal breast tissue around the breast cancer.\n\nTotal (or simple) mastectomy, in which the surgeon removes the entire breast, including the nipple, the areola (the colored, circular area around the nipple), and most of the overlying skin, and may also remove some of the lymph nodes under the arm, also called the axillary lymph glands.\n\nModified radical mastectomy, in which the surgeon removes the entire breast (including the nipple, the areola, and the overlying skin), some of the lymph nodes under the arm, and the lining over the chest muscles. In some cases, part of the chest wall muscles is also removed."
  },
  {
    name: "Partial Colectomy",
    description: "A partial colectomy is the removal of part of the large intestine (colon) which may be done to treat cancer of the colon or inflammatory conditions such as ulcerative colitis or diverticulitis."
  },
  {
    name: "Prostatectomy",
    description: "The surgical removal of all or part of the prostate gland, the sex gland in men that surrounds the neck of the bladder and urethra--the tube that carries urine away from the bladder. A prostatectomy may be done for an enlarged prostate, benign prostatic hyperplasia (BPH), or if the prostate gland is cancerous."
  },
  {
    name: "Tonsillectomy",
    description: "The surgical removal of one or both tonsils. Tonsils are located at the back of the mouth and help fight infections."
  }
];

const Procedures = () => {
  return (
    <div>
      <Navbar />
      <h1>Medical Procedures</h1>
      {procedures.map((procedure, indexxx) => (
        <div key={indexxx} className="card" style={{ marginBottom: '20px' }}>
          <h2>{procedure.name}</h2>
          <p>{procedure.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Procedures;
