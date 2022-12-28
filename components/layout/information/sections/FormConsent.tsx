import Link from "next/link";
import React, { useRef, useState } from "react";
import SinupInput from "../../../inputs/SignupInput";
import SignaturePad from "react-signature-canvas";
import { LinearButton } from "../../../buttons";
import { useRecoilState } from "recoil";
import { StepperAtom } from "../../../../helper";

const FormConsent = () => {
  const [imageURL, setImageURL] = useState(null);
  const [step, setStep] = useRecoilState(StepperAtom);

  const sigCanvas = useRef({});
  const clear = () => {
    sigCanvas.current.clear();
    setImageURL(null);
  };
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  return (
    <div className="lg:ml-20 w-full">
      <div className="border rounded-lg px-5 py-10 pb-16">
        <h3 className="font-semibold">REQUIRED "HOW TO" VIDEO</h3>
        <form className="mt-5">
          <label className="container__radio flex items-center">
            <input
              name="check"
              className="checkbox__radio"
              value="yes"
              type="checkbox"
            />
            <span className="text-sm  checkmark__radio "></span>
            <span className="font-medium">
              I have watched the video and know how to give myself an injection
            </span>
          </label>
          <Link
            href="www.vitastir.com/howtoinject"
            target="_blank"
            className="text-sm text-[#7EBDCE]"
          >
            www.vitastir.com/howtoinject (VIDEO AVAILABLE HERE)
          </Link>
          <div className="mt-3">
            <span className="font-semibold text-sm">
              I WILL FOLLOW THE INSTRUCTIONS AND DOSAGE AMOUNTS ON MY BOTTLE. I
              understand these injections are to be self injected in the area
              written on my bottle. I will watch the video to learn how to
              self-inject. I am aware the instructional video is available to
              watch at www.vitastir.com/howtoinject. I agree I will use the
              syringes and vitamins as directed.
            </span>
            <span className="text-secondary">*</span>
            <label className="container__radio flex items-center mt-5">
              <input
                name="check"
                className="checkbox__radio"
                value="yes"
                type="checkbox"
              />
              <span className="text-sm  checkmark__radio "></span>
              <span className="">I Agree</span>
            </label>
          </div>
          <div className="mt-3">
            <span className="font-semibold text-sm">
              I understand that my custom package is ordered for me. My vial or
              package I start at VITAstir will have an expiration date that is
              30 days after opening. I understand, after the 30 day period,
              medications are considered expired and should be discarded by me.
            </span>
            <span className="text-secondary">*</span>
            <label className="container__radio flex items-center mt-5">
              <input
                name="check"
                className="checkbox__radio"
                value="yes"
                type="checkbox"
              />
              <span className="text-sm  checkmark__radio "></span>
              <span className="">I Agree</span>
            </label>
          </div>
          <div className="mt-3">
            <span className="font-semibold text-sm">
              CONSENT FORM: I acknowledge that I have received instructions and
              educational material from VITAstir for the administration of home
              injections. I acknowledge that the risks of injections has been
              discussed with me. I understand that these risks include, but are
              not limited to, local reactions, rashes, bruises, etc. - I
              understand that if I elect to do self-administered injections or
              if another designated individual gives me the injection, I should
              be attended for at least 30 minutes by a responsible adult to
              assist me in case of a severe reaction. - I agree to have on hand
              an epinephrine injector to use in case of a systemic reaction. I
              acknowledge that I have received instruction on its use and
              administration. I further understand that I must identify that the
              date of this medication is current. If not, I will call for a
              renewal of my medication. - I understand that it is my
              responsibility to maintain follow up appointments with my
              physician at VITAstir as needed. By signing this form, I assume
              full responsibility for receiving my injections and release
              VITAstir and its physicians from any liability or responsibility
              for any reactions, conditions, self-injection procedures or
              injuries in conjunction with the injection therapies.
            </span>
            <span className="text-secondary">*</span>
            <label className="container__radio flex items-center mt-5">
              <input
                name="check"
                className="checkbox__radio"
                value="yes"
                type="checkbox"
              />
              <span className="text-sm  checkmark__radio "></span>
              <span className="">I Agree</span>
            </label>
          </div>
          <div className="mt-3">
            <span className="font-semibold text-sm">
              I UNDERSTAND THIS IS A NON-REFUNDABLE PRODUCT AND CANNOT BE
              RETURNED. I AGREE TO THE REFUND POLICY AVAILABLE AT
              www.vitastir.com/refund-policy/ - I authorize VITAstir to charge
              my credit card for agreed upon purchases. I understand that my
              information will be saved to file for future transactions on my
              account.
            </span>
            <span className="text-secondary">*</span>
            <label className="container__radio flex items-center mt-5">
              <input
                name="check"
                className="checkbox__radio"
                value="yes"
                type="checkbox"
              />
              <span className="text-sm  checkmark__radio "></span>
              <span className="">I Agree</span>
            </label>
          </div>
          <div className="w-[90%] mt-5">
            <SinupInput
              label="PRINT NAME. I HAVE READ THE ABOVE CONSENT FORM AND AGREE TO E-SIGN. (First and Last Name)"
              type="text"
              placeholder="John Smith"
            />
          </div>
          <div className="w-[350px] h-[200px] mt-5">
            <div className="pb-5">
              <span className="font-semibold">SIGNATURE</span>
              <span className="text-secondary">*</span>
            </div>
            <div className="border border-dashed border-gray2/80">
              <SignaturePad
                onEnd={save}
                ref={sigCanvas}
                canvasProps={{
                  className: "signatureCanvas",
                  width: 350,
                  height: 200,
                }}
              />
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={clear}>
                <img src="/undo.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="mt-24 w-[70%]">
            <SinupInput
              label="Date SIGNED (mm/dd/yyyy):"
              type="text"
              placeholder="December 5, 2022"
            />
          </div>
        </form>
      </div>
      <div className="mt-10 flex justify-end ">
        <LinearButton onClick={() => setStep(6)} title="Next:: Pay" />
      </div>
    </div>
  );
};

export default FormConsent;
