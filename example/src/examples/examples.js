import React from 'react'
import Prism from "prismjs"
import "./prism.css";
import Alert from 'react-alert'
import styles from '../section/section.css'

const CodeIcon = () => {
    return (
        <i className='icon'>
            <svg viewBox="0 0 522.468 522.469" width='16px' height='16px'>
                <path
                //d="M325.762,70.513l-17.706-4.854c-2.279-0.76-4.524-0.521-6.707,0.715c-2.19,1.237-3.669,3.094-4.429,5.568L190.426,440.53 c-0.76,2.475-0.522,4.809,0.715,6.995c1.237,2.19,3.09,3.665,5.568,4.425l17.701,4.856c2.284,0.766,4.521,0.526,6.71-0.712 c2.19-1.243,3.666-3.094,4.425-5.564L332.042,81.936c0.759-2.474,0.523-4.808-0.716-6.999 C330.088,72.747,328.237,71.272,325.762,70.513z" 
                />
                <path d="M166.167,142.465c0-2.474-0.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857 s-4.665,0.955-6.567,2.857L2.856,254.666C0.95,256.569,0,258.759,0,261.233c0,2.474,0.953,4.664,2.856,6.566l133.043,133.044 c1.902,1.906,4.089,2.854,6.567,2.854s4.665-0.951,6.567-2.854l14.277-14.268c1.903-1.902,2.856-4.093,2.856-6.57 c0-2.471-0.953-4.661-2.856-6.563L51.107,261.233l112.204-112.201C165.217,147.13,166.167,144.939,166.167,142.465z" />
                <path d="M519.614,254.663L386.567,121.619c-1.902-1.902-4.093-2.857-6.563-2.857c-2.478,0-4.661,0.955-6.57,2.857l-14.271,14.275 c-1.902,1.903-2.851,4.09-2.851,6.567s0.948,4.665,2.851,6.567l112.206,112.204L359.163,373.442 c-1.902,1.902-2.851,4.093-2.851,6.563c0,2.478,0.948,4.668,2.851,6.57l14.271,14.268c1.909,1.906,4.093,2.854,6.57,2.854 c2.471,0,4.661-0.951,6.563-2.854L519.614,267.8c1.903-1.902,2.854-4.096,2.854-6.57 C522.468,258.755,521.517,256.565,519.614,254.663z" />
            </svg>
        </i>
    )
}
const Details = ({ text }) => {
    return (
        <div className={styles.exampleDetails}>
            {text}
            <CodeIcon />
        </div>
    )
}
export const SimpleAlert = ({ demo, detail, code }) => {
    return (
        <React.Fragment>
            {demo &&
                <React.Fragment>
                    <Alert
                        message="success"
                        type="success"
                        style={{ marginBottom: 10 }}
                    />
                    <Alert
                        message="warning"
                        type="warning"
                        style={{ marginBottom: 10 }}
                    />

                </React.Fragment>
            }
            {detail &&
                <div>
                    <Details
                        text={<p>There are 4 types of Alert:
                            <br /><br />
                            <code>success</code> <code>info</code> <code>warning</code> <code>error</code></p>}
                    />
                </div>
            }
            {code &&
                <pre>
                    <code className="language-javascript">
                        {`import Alert from 'react-alert';

ReactDOM.render(
    <Alert 
        message="Success Message" 
        type="success" 
    />
,mountNode
);
`}
                    </code>
                </pre>
            }
        </React.Fragment>
    )
}
export const MaterialAlert = ({ demo, detail, code }) => {
    return (
        <React.Fragment>
            {demo &&
                <React.Fragment>
                    <Alert
                        message="primary"
                        type="primary"
                        material
                        style={{ marginBottom: 10 }}
                    />
                    <Alert
                        message="error"
                        type="error"
                        material
                        style={{ marginBottom: 10 }}
                    />
                    <Alert
                        message="warning"
                        type="warning"
                        material
                        style={{ marginBottom: 10 }}
                    />

                </React.Fragment>
            }
            {detail &&
                <div className={styles.exampleDetails}>
                    <p>
                        add <code>material</code>.<br /><br />
                        There are 7 types of Material Alert:
                        <br /><br />
                        <code>primary</code> <code>dark</code> <code>light</code> <code>success</code> <code>info</code> <code>warning</code> <code>error</code></p>

                </div>
            }
            {code &&
                <pre>
                    <code className="language-javascript">
                        {`import Alert from 'react-alert';

ReactDOM.render(
    <Alert 
        message="Success Message" 
        type="success"
        material
    />
,mountNode
);
`}
                    </code>
                </pre>
            }
        </React.Fragment>
    )
}
export const IconAlert = ({ demo, detail, code }) => {
    return (
        <React.Fragment>
            {demo &&
                <React.Fragment>
                    <Alert
                        message="Error Message"
                        type="error"
                        icon
                        style={{ marginBottom: 10 }}
                    />
                    <Alert
                        message="Information Message"
                        type="info"
                        icon
                        style={{ marginBottom: 10 }}
                    />
                </React.Fragment>
            }
            {detail &&
                <React.Fragment>
                    <p>Display Alert with an icon.</p>
                </React.Fragment>
            }
            {code &&
                <pre>
                    <code className="language-javascript">
                        {`import Alert from 'react-alert';

ReactDOM.render(
    <Alert 
        message="Error Message" 
        type="error" 
        icon 
    />
,mountNode
);
`}
                    </code>
                </pre>
            }
        </React.Fragment>
    )
}


export const DescriptionAlert = ({ demo, detail, code }) => {
    return (
        <React.Fragment>
            {demo &&
                <React.Fragment>
                    <Alert
                        message="warning"
                        description="some description"
                        type="warning"
                        icon
                        style={{ marginBottom: 10 }}
                    />
                    <Alert
                        message="success"
                        description="some description"
                        type="success"
                        icon
                        style={{ marginBottom: 10 }}
                    />
                    <Alert
                        message="error"
                        description="some description"
                        type="error"
                        material
                        icon
                        style={{ marginBottom: 10 }}
                    />
                </React.Fragment>
            }
            {detail &&
                <React.Fragment>
                    <p>Additional description for alert message.</p>
                </React.Fragment>
            }
            {code &&
                <pre>
                    <code className="language-javascript">
                        {`import Alert from 'react-alert';

ReactDOM.render(
    <Alert 
        message="Error" 
        description="some description" 
        type="error" 
        icon 
    />
,mountNode
);
`}
                    </code>
                </pre>
            }
        </React.Fragment>
    )
}

export const Closable = ({ demo, detail, code }) => {
    return (
        <React.Fragment>
            {demo &&
                <React.Fragment>
                    <Alert
                        message="success"
                        closable
                        type="success"
                        icon
                        style={{ marginBottom: 10 }}
                    />
                    <Alert
                        message="warning"
                        description="some description"
                        closable
                        material
                        type="warning"
                        icon
                        style={{ marginBottom: 10 }}
                    />
                    <Alert
                        message="info"
                        description="some description"
                        closable
                        type="info"
                        style={{ marginBottom: 10 }}
                    />
                </React.Fragment>
            }
            {detail &&
                <React.Fragment>
                    <p>show close button with <code>closable</code> parameter</p>

                </React.Fragment>
            }
            {code &&
                <pre>
                    <code className="language-javascript">
                        {`import Alert from 'react-alert';

ReactDOM.render(
    <Alert 
        message="info" 
        closable
        type="info" 
        icon 
    />
,mountNode
);
`}
                    </code>
                </pre>
            }
        </React.Fragment>
    )
}

export const RtlAlert = ({ demo, detail, code }) => {
    return (
        <React.Fragment>
            {demo &&
                <React.Fragment>
                    <Alert
                        message="اطلاعات شما با موفقیت ثبت شد"
                        type="success"
                        material
                        rtl
                        style={{ marginBottom: 10 }}
                    />
                    <Alert
                        message="توجه"
                        description="لطفا مقادیر را با دقت وارد کنید!"
                        rtl
                        type="error"
                        icon
                        style={{ marginBottom: 10 }}
                    />
                </React.Fragment>
            }
            {detail &&
                <React.Fragment>
                    <p>use <code>rtl</code> in parameter</p>

                </React.Fragment>
            }
            {code &&
                <pre>
                    <code className="language-javascript">
                        {`import Alert from 'react-alert';

ReactDOM.render(
    <Alert 
        message="Error" 
        type="error" 
        rtl
    />
,mountNode
);
`}
                    </code>
                </pre>
            }
        </React.Fragment>
    )
}