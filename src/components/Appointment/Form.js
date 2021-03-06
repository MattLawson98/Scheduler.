import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList.js';
import Button from 'components/Button';
//Creates the form functionality for setting an interview
export default function Form(props) {

const [name, setName] = useState(props.name || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null);
const [error, setError] = useState("");

const reset = function() {
  setName("");
  setInterviewer(null);
};

const cancel = () => {
  reset();
  props.onCancel();
};

function validate() {
  if (name === "") {
    setError("Student name cannot be blank");
    return;
  }
  setError("");
  props.onSave(name, interviewer);
}

  return (
  <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          name="fullName"
          onChange={(event) => setName(event.target.value)}            
          value={name}
          type="text"
          placeholder="Enter Student Name"
          data-testid="student-name-input"
        />
        <section className="appointment__validation">{error}</section>
        <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer}/>
      </form>
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={cancel}>Cancel</Button>
        <Button confirm onSubmit={event => event.preventDefault()} onClick={validate}>Save</Button>
      </section>
    </section>
  </main>
  )
}