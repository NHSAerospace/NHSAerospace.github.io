import React, { useState } from "react";
import "./SLI.css"

function SLI() {
    const [activeReport, setActiveReport] = useState<string | null>(null);

    const reports = [
        { id: 'proposal', title: 'Proposal', path: 'https://drive.google.com/file/d/15cRX-H4RT_aDHTheD_fYyB0oSqpWYzO2/view?usp=sharing' },
        { id: 'pdr', title: 'Preliminary Design Review (PDR)', path: 'https://drive.google.com/file/d/1TSZMuM2gz2MS1TH4G85bLp45yO-BkG11/view?usp=sharing' },
        { id: 'cdr', title: 'Critical Design Review (CDR)', path: 'https://drive.google.com/file/d/1d9Mi079z_o7RtAr-56sEpImLsJ-ZPkBe/view?usp=sharing' },
    ];

    const toggleReport = (reportId: string) => {
        setActiveReport(activeReport === reportId ? null : reportId);
    };

    return (
        <div className="sli">
            <h1>NASA Student Launch Initiative</h1>
            <p className="sli-intro">
                The NASA Student Launch Initiative (SLI) is a prestigious research-based, competitive, experiential exploration activity. 
                Our team designs, builds, and flies high-powered rockets while following the same processes used by NASA engineers. 
                Through this eight-month journey, we develop innovative solutions to technical problems, enhance our engineering skills, 
                and prepare comprehensive design reviews similar to real NASA projects.
            </p>
            <a className="nasa-link" href="https://www.nasa.gov/learning-resources/nasa-student-launch/" target="_blank">
                Learn More About NASA SLI
            </a>
            <div className="sli-content">
                <div className="sli-reports">
                    <h2>Project Documentation</h2>
                    {reports.map(report => (
                        <div key={report.id} className="report-item">
                            <div 
                                className={`report-button ${activeReport === report.id ? 'active' : ''}`}
                                onClick={() => toggleReport(report.id)}
                            >
                                <p>{report.title}</p>
                                <a href={report.path} target="_blank">Open in new tab</a>
                            </div>
                            <div className={`pdf-viewer ${activeReport === report.id ? 'open' : ''}`}>
                                {activeReport === report.id && (
                                    <iframe
                                        className="pdf-frame"
                                        src={report.path}
                                        title={report.title}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SLI;