import privacyVsSecurityImage from "@/assets/privacy-vs-security.png";

interface Props {}

export default function SurveyInfo({}: Props) {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex w-full flex-col items-center justify-between gap-16 xl:flex-row">
        <p className="w-full">
          laboris culpa consectetur adipisicing mollit nulla ea. laborum laborum
          officia quis pariatur. nisi elit minim labore esse do ullamco sint
          amet incididunt est cillum pariatur. magna lorem excepteur enim
          ullamco aliqua minim.
          <br />
          <br />
          eu dolore et esse ut aute consectetur sit cillum sunt. ea ut quis
          officia cupidatat nulla proident nulla proident cillum excepteur
          eiusmod. fugiat ut deserunt adipisicing enim ipsum. eu dolore culpa
          velit elit amet id est dolore labore do nostrud excepteur proident.
          nisi officia incididunt enim ad et sit. elit et mollit aute amet lorem
          deserunt duis et cupidatat consequat irure anim pariatur commodo.
        </p>
        <img
          className="w-full"
          src={privacyVsSecurityImage}
          alt="Privacy vs Security"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-16 xl:flex-row">
        <p className="w-full">
          laboris culpa consectetur adipisicing mollit nulla ea. laborum laborum
          officia quis pariatur. nisi elit minim labore esse do ullamco sint
          amet incididunt est cillum pariatur. magna lorem excepteur enim
          ullamco aliqua minim.
          <br />
          <br />
          eu dolore et esse ut aute consectetur sit cillum sunt. ea ut quis
          officia cupidatat nulla proident nulla proident cillum excepteur
          eiusmod. fugiat ut deserunt adipisicing enim ipsum. eu dolore culpa
          velit elit amet id est dolore labore do nostrud excepteur proident.
          nisi officia incididunt enim ad et sit. elit et mollit aute amet lorem
          deserunt duis et cupidatat consequat irure anim pariatur commodo.
        </p>
        <img
          className="w-full"
          src={privacyVsSecurityImage}
          alt="Privacy vs Security"
        />
      </div>
    </section>
  );
}
