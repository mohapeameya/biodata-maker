import { useEffect, useState } from "react";
import ReactModal from 'react-modal';
import CropPhoto from './components/cropphoto/CropPhoto'

import { rashiValues, complexionValues, heightValues, weightValues } from "./data";

export default function App() {

  const [biodata, setBiodata] = useState({
    name: { checked: true, value: '' },
    dob: { checked: true, value: '' },
    tob: { checked: true, value: '' },
    pob: { checked: true, value: '' },
    rashi: { checked: true, value: 0 },
    complexion: { checked: true, value: 0 },
    height: { checked: true, value: 25 },
    weight: { checked: true, value: 0 },
    education: { checked: true, value: '' },
    job: { checked: true, value: '' },
    religionCaste: { checked: true, value: '' },
    father: { checked: true, value: '' },
    fatherJob: { checked: true, value: '' },
    mother: { checked: true, value: '' },
    motherJob: { checked: true, value: '' },
    contact: { checked: true, value: '' },
    address: { checked: true, value: '' },
    image: { checked: true, value: '' },
    filename: { checked: true, value: '' }
  });

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal((prevState) => !prevState);
  }

  const setImage = (imageObject) => {
    setBiodata({
      ...biodata,
      image: { checked: true, value: imageObject.image },
      filename: { checked: true, value: imageObject.filename }
    })
  }

  useEffect(() => {
    console.log('App component loaded');
  }, []);

  return (
    <>
      <header className="fluid-container text-center p-3">
        <h1>Quick Marriage Biodata Maker</h1>
      </header>

      <section className="fluid-container text-center">
        <div className="container shadow p-3 mb-3 bg-white rounded">
          <h3>Personal Details</h3>
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked disabled />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Full Name</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" placeholder="Enter full name" onChange={e => setBiodata({ ...biodata, name: { checked: biodata.name.checked, value: e.target.value } })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked disabled />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Date of Birth</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" aria-label="Date" type="date" onChange={e => setBiodata({ ...biodata, dob: { checked: biodata.dob.checked, value: e.target.value } })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked disabled />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Time of Birth</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" aria-label="Time" type="time" onChange={e => setBiodata({ ...biodata, tob: { checked: biodata.tob.checked, value: e.target.value } })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={e => setBiodata({ ...biodata, pob: { checked: e.target.value, value: biodata.pob.value } })} />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Place of Birth</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" placeholder="Enter place of birth" onChange={e => setBiodata({ ...biodata, pob: { checked: biodata.pob.checked, value: e.target.value } })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Rashi</label>
                </div>
                <div className="col text-start">
                  <select name="rashi" id="rashi" className="form-select" onChange={e => setBiodata({ ...biodata, rashi: Number(e.target.value) })}>
                    {
                      rashiValues.map((item, index) => <option key={item} value={index}>{item}</option>)
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Complexion</label>
                </div>
                <div className="col text-start">
                  <select name="rashi" id="complexion" className="form-select" onChange={e => setBiodata({ ...biodata, complexion: Number(e.target.value) })}>
                    {
                      complexionValues.map((item, index) => <option key={item} value={index}>{item}</option>)
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Height</label>
                </div>
                <div className="col text-start">
                  <select name="rashi" id="height" className="form-select" onChange={e => setBiodata({ ...biodata, height: Number(e.target.value) })}>
                    {
                      heightValues.map((item, index) => <option key={item} value={index}>{item}</option>)
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Weight</label>
                </div>
                <div className="col text-start">
                  <select name="rashi" id="weight" className="form-select" onChange={e => setBiodata({ ...biodata, weight: Number(e.target.value) })}>
                    {
                      weightValues.map((item, index) => <option key={item} value={index}>{item}</option>)
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Education</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" placeholder="Enter highest education" onChange={e => setBiodata({ ...biodata, education: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Job/Occupation</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" placeholder="Enter job details" onChange={e => setBiodata({ ...biodata, job: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Religion/Caste</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" placeholder="Enter religion and caste" onChange={e => setBiodata({ ...biodata, religionCaste: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>

      </section >

      <section className="fluid-container text-center">
        <div className="container shadow p-3 mb-3 bg-white rounded">
          <h3>Family Details</h3>
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Father's Name</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" placeholder="Enter father's full name" onChange={e => setBiodata({ ...biodata, father: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Father's Occupation</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" placeholder="Enter father's occupation" onChange={e => setBiodata({ ...biodata, fatherJob: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Mother's Name</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" placeholder="Enter mother's full name" onChange={e => setBiodata({ ...biodata, mother: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Mother's Occupation</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" placeholder="Enter mother's occupation" onChange={e => setBiodata({ ...biodata, motherJob: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

        </div>
      </section>

      <section className="fluid-container text-center">
        <div className="container shadow p-3 mb-3 bg-white rounded">
          <h3>Contact Details</h3>
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Contact</label>
                </div>
                <div className="col text-start">
                  <input className="form-control" placeholder="Enter contact number" onChange={e => setBiodata({ ...biodata, contact: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col-auto form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </div>
                <div className="col text-start">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Address</label>
                </div>
                <div className="col text-start">
                  <textarea className="form-control" rows="3" placeholder="Enter current address" onChange={e => setBiodata({ ...biodata, address: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>

        </div>
      </section>

      <ReactModal isOpen={showModal} ariaHideApp={false}>
        <CropPhoto closeModal={handleToggleModal} handleCroppedImage={setImage} />
      </ReactModal>

      <section className="fluid-container text-center">
        <div className="container shadow p-3 mb-3 bg-white rounded">
          {/* <h3>Add Photo</h3> */}
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col">
                  <button className="btn btn-secondary" onClick={handleToggleModal}>
                    {biodata.image.value ? (<span>Replace Photo</span>) : (<span>Add Photo</span>)}
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-primary" onClick={() => { }}>Preview</button>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-8">
              <div className="row align-items-center p-1">
                <div className="col">
                  {biodata.filename.value && (<div><span>{biodata.filename.value}</span></div>)}
                </div>
                <div className="col">
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
    </>
  );
}
