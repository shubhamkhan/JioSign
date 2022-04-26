import React from 'react';
// import './Home.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Person from '../../images/productimage.png';
import Mobile from '../../images/productimageRight.png';
import Image3 from '../../images/Image3.png';
import Image4 from '../../images/Image4.png';
import Image5 from '../../images/Image5.png';
import ProductLogo from '../../images/productlogo.svg';

const Home = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }} style={{marginTop: '2%'}}>

          <Grid container spacing={2} style={{marginTop: '10%', marginBottom: '5%'}}>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <img src={Person} alt="Person" style={{width: '95%', marginTop: '26%'}} />
                </Grid>
                <Grid item xs={6}>
                  <img src={Mobile} alt="Mobile" style={{width: '95%', marginTop: '5%'}} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6} style={{marginTop: '5%', textAlign: 'left'}}>
              <Typography variant="h4" gutterBottom component="div" style={{color: '#214796', fontWeight: '600'}}>
                Accelerate your Business with JioSign
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div" style={{fontWeight: '600'}}>
                Most Convenient, Fastest and Secure Digital Signing Solution
              </Typography>
              <Button variant="contained" style={{background: '#214796', textTransform: 'none'}}>Sign up for JioSign account</Button>
            </Grid>

          </Grid>
          <Grid container spacing={2} style={{marginTop: '8%', marginBottom: '3%'}}>
            
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{marginTop: '5%', textAlign: 'left'}}>
                  <Typography variant="h4" gutterBottom component="div" style={{color: '#214796', fontWeight: '600'}}>
                    Go Completely paperless and Collect Signatures or Approvals DIGITALLY On the Go
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom component="div" style={{fontWeight: '600'}}>
                    You can use JioSign
                  </Typography>
                  <List
                    sx={{ width: '100%', maxWidth: '85%', bgcolor: 'background.paper' }}
                    aria-label="contacts"
                  >
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="Across your organization to Collect signatures or approvals . (Everyone can use it right from HR, Finance, Marketing, Sales, Admin, SCM, IT, and off course Legal.)" />
                    </ListItem>
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="Sign any kind of document like NDAs, Agreements, Legal, Financial, compliance documents or IOMS, Approval notes, Purchase orders, Invoices etc" />
                    </ListItem>
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="Individuals can sign documents, receipts." />
                    </ListItem>
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="Use JioSign on Mobile or Laptop" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <img src={Image3} alt="Mobile" style={{width: '95%', height: '100%'}} />
                </Grid>
              </Grid>
            </Grid>

          </Grid>
          <hr />
          <Grid container spacing={2} style={{marginTop: '3%', marginBottom: '3%'}}>
            
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <img src={Image4} alt="Validate" style={{width: '95%', height: '100%'}} />
                </Grid>
                <Grid item xs={12} md={6} style={{marginTop: '5%', textAlign: 'left', paddingLeft: 0}}>
                  <Typography variant="h4" gutterBottom component="div" style={{color: '#214796', fontWeight: '600'}}>
                    JioSign guarantees Tamper-evident documents
                  </Typography>
                  <List
                    sx={{ width: '100%', maxWidth: '85%', bgcolor: 'background.paper' }}
                    aria-label="contacts"
                  >
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="Invalid digital signatures if document is tampered" />
                    </ListItem>
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="Get complete document Audit Trail" />
                    </ListItem>
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="Control document access to specific signatories &#38; viewers" />
                    </ListItem>
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="Use JioSign on Mobile or Laptop" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
          <hr />
          <Grid container spacing={2} style={{marginTop: '3%', marginBottom: '3%'}}>
            
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{marginTop: '5%', textAlign: 'left'}}>
                  <Typography variant="h4" gutterBottom component="div" style={{color: '#214796', fontWeight: '600'}}>
                    JioSign offers Legally compliant Digital Signatures
                  </Typography>
                  <List
                    sx={{ width: '100%', maxWidth: '85%', bgcolor: 'background.paper' }}
                    aria-label="contacts"
                  >
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="e-Signature: visual OTP-based signature to use with partners in India or across the world" />
                    </ListItem>
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="DSC signature: Digital Signature Certificate based signature for documents that require official signature in India" />
                    </ListItem>
                    <ListItem style={{paddingLeft: 0}}>
                      <ListItemIcon style={{color: '#00B4A3', minWidth: '38px'}}>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText style={{minWidth: '100%'}} primary="Global Platform - PKI neutral and works with X.509 certificate issued by any CA globally for digital signing." />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <img src={Image5} alt="Contract" style={{width: '95%', height: '100%'}} />
                </Grid>
              </Grid>
            </Grid>

          </Grid>

        </Box>
      </Container>
      <div width='100%' style={{background: '#F5F6FB', paddingTop: '2%', paddingLeft: '6%', paddingRight: '6%'}}>
      <div style={{ boxShadow: "none" }}>
        <Typography variant="h6" gutterBottom component="div" style={{ textAlign: 'left'}}>
          Frequently Asked Questions
        </Typography>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{background: '#F5F6FB'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '80%', flexShrink: 0, textAlign: 'left' }}>What is JioSign. What does it offer?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: 'left'}}>
              JioSign is a digital signing platform. Now you can digitally sign 
              any kind of document as well as invite multiple people to sign the document 
              digitally. To sign any document just create your account on JioSign, upload 
              your document and add the person(s) who you want to sign the document. 
              Once done then you can sign and send the same automatically to others for signing.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{background: '#F5F6FB'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '80%', flexShrink: 0, textAlign: 'left' }}>What kind of documents can be signed using JioSign platform?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: 'left'}}>
              JioSign can be used for personal as well as enterprise needs. 
              You can sign any PDF document such as various types of agreements, 
              Inter-Office Memos, Approval notes, Employment Offer letters, 
              Purchase orders, Invoices etc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{background: '#F5F6FB'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '80%', flexShrink: 0, textAlign: 'left' }}>Why should I use JioSign? What are the benefits?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: 'left'}}>
              JioSign allows users to manage their document signing workflows digitally 
              allowing users to sign from anywhere over phone or computer saving time and money. 
              JioSign has been built keeping in mind both Indian and Global user needs both in a 
              personal or enterprise context. While JioSign offers features found in industry leading 
              global platforms such as support for multi-party signing, sequencing of signatories etc., 
              it also provides for India specific needs such as DSC token based digital signatures 
              and Aadhaar e-Signature (coming soon).
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{background: '#F5F6FB'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '80%', flexShrink: 0, textAlign: 'left' }}>How does JioSign platform guarantee the authenticity of a signed document using JioSign?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: 'left'}}>
              Every document signed on the JioSign platform is accompanied by the following:
              So, if the document is tampered with, the signatures in the document become invalid, making the document ‘tamper evident’.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <Box sx={{ flexGrow: 1 }} style={{marginTop: '2%'}}>
        <Grid container spacing={2} style={{marginTop: '3%', marginBottom: '3%'}}>
          
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item md={2} style={{align: 'left', paddingLeft: 0}}>
                <img src={ProductLogo} alt="Validate" style={{width: '80%', height: '100%'}} />
              </Grid>
              <Grid item md={7}>
              </Grid>
              <Grid item md={3} style={{marginTop: '5%', textAlign: 'left', paddingLeft: 0}}>
                <Typography variant="h6" gutterBottom component="div">
                  SUPPORT   LEGAL
                </Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Box>
      </div>
    </React.Fragment>
  )
}

export default Home