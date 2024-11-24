import privacyVsSecurityImage from "@/assets/privacy-vs-security.png";

interface Props {}

export default function SurveyInfo({}: Props) {
  return (
    <section>
      <div className="flex w-full flex-row items-center justify-between gap-16">
        <p className="w-full">
          Laboris culpa consectetur adipisicing mollit nulla ea. Laborum laborum
          officia quis pariatur. Nisi elit minim labore esse do ullamco sint
          amet incididunt est cillum pariatur. Magna Lorem excepteur enim
          ullamco aliqua minim.
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
