import React,{useState} from "react";
import styles from "./Feedback.module.css";
import icon from "../../../assets/icons/feedbackIcon.png";
import * as Popover from "@radix-ui/react-popover";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { feedbackFormValidator } from "../../../utility/validator";
import { sendFeedback } from "../../../api/feedback";
function Feedback() {
  const [isOpenFlag,setIsOpenFlag]=useState(false);
  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false);
    let response = await sendFeedback({... values});
    if(response){;
      setIsOpenFlag(false);
    }
  };

  return (
    <div className={styles.feedbackStickyContainer}>
      <Popover.Root open={isOpenFlag} >
        <Popover.Trigger asChild >
          <button onClick={()=>{setIsOpenFlag(!isOpenFlag)}}>
            
            <img src={icon}></img>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.PopoverContent} sideOffset={5}>
            <div className={styles.popup} >
              <Formik
                initialValues={{
                  type: "",
                  feedback: "",
                }}
                validationSchema={feedbackFormValidator}
                onSubmit={onSubmit}
              >
                {({ isSubmitting,errors,touched }) => (
                  <Form className={styles.form}>
                    <div className={styles.formInput}>
                      <label htmlFor="type">Type of feedback</label>
                      <Field className={styles.selectInput} style={{borderColor: errors.type?"red":"black"}} as="select" name="type">
                        <option value="">Choose the type</option>
                        <option value="Bugs">Bugs</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Query">Query</option>

                      </Field>
                      <ErrorMessage
                        className={styles.errorMessage}
                        name="type"
                        component="div"
                      />
                    </div>

                    <div className={styles.formInput}>
                      <label htmlFor="feedback"  >Feedback</label>
                      <Field
                      as="textarea"
                      style={{borderColor: errors.feedback?"red":""}}
                        className={styles.inputText}
                        type="feedback"
                        name="feedback"
                      />
                      <ErrorMessage
                        className={styles.errorMessage}
                        name="feedback"
                        component="div"
                      />
                    </div>

                    <button
                      className={styles.submitButton}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

export default Feedback;
