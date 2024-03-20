import React from 'react'
import NavigationbarLogo from '../../Layout/NavbarLogo'
import classes from './Summary.module.css'; 
import { Container, Button } from 'react-bootstrap';

const Summary = () => {
  const textSummary = `
---
*Jenkins Log File Analysis Summary*

*Date Range:* [Date Range of Log File]

*Total Builds:* [Total Number of Builds]

*Successful Builds:* [Number of Successful Builds]

*Failed Builds:* [Number of Failed Builds]

*Average Build Time:* [Average Build Time]

*Most Common Errors:*
1. [Error 1]: [Number of Occurrences]
2. [Error 2]: [Number of Occurrences]
3. [Error 3]: [Number of Occurrences]

*Trends:*
- [Any notable trends or patterns observed during the analysis, such as spikes in build times, frequent occurrence of specific errors, etc.]

*Recommendations:*
- Investigate and address the recurring errors to improve build reliability.
- Optimize build processes to reduce average build time.
- Implement proactive monitoring and alerting mechanisms for critical issues.

*Conclusion:*
The analysis of the Jenkins log file reveals [insights/trends]. By addressing recurring errors and optimizing build processes, we can enhance the efficiency and reliability of the CI/CD pipeline.
`;

  return (
    <>
      <NavigationbarLogo />
      <Container className={classes.textboxcontainer}>
      <div className={classes.textbox}>{textSummary}</div>
      </Container>
      <div className={classes.backbutton}>
        <Button href="/upload" variant="dark" size="md" className={classes.back}>
          Back
        </Button>
      </div>
    </>
  )
}

export default Summary;
