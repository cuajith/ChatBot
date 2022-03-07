import React, { useState } from 'react';
import { Typography, Button } from '@mui/material'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import EmailIcon from '@mui/icons-material/Email';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import NumbersIcon from '@mui/icons-material/Numbers';
import StarIcon from '@mui/icons-material/Star';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import LinkIcon from '@mui/icons-material/Link';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import KeyTwoToneIcon from '@mui/icons-material/KeyTwoTone';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import "./Flowsetup.css"

const Flowsetup = () => {
  const [question, setQuestion] = useState(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClick  () {
    const elem = document.getElementById("remove");
    elem.remove();
    handleClose();
  }
  return (
    <div>
      <div class="grid">
        <article class="main">
          <Typography class='typo-text'>Questionnaire Flow</Typography>
          <Typography class='typo-text'>Ask User</Typography>
          <button type="button" class='button' onClick={() => setQuestion(true)}>
            <span class='button-icon-one'>
              <QuestionMarkIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Question</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <ModeStandbyIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Single Choice</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <EmailIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Email</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <CheckBoxIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Multiple Choice</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <PhoneAndroidIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Mobile Number</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <NumbersIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Number</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <StarIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Rating</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <EventNoteIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Date Picker</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <AccessTimeIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Time Picker</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <LocationOnIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Location</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <CompareArrowsIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Range</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <FileUploadIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>File Upload</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <LinkIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Website</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <PersonAddAltRoundedIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Ask Contacts</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <ShoppingCartRoundedIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Order Items</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <KeyTwoToneIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Authenticator</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

          <button type="button" class='button'>
            <span class='button-icon-one'>
              <FormatAlignJustifyIcon sx={{ width: 40, height: 18 }} />
            </span>
            <span class='button-text'>Form</span>
            <span class='button-icon-two'>
              <InfoIcon sx={{ width: 40, height: 18 }} />
            </span>
          </button>

        </article>
        <section class="side">
          <Button variant="contained" className='side-button'>Preview</Button>
          {question ?
            <button type="button" class='text-side-button' id="remove">
              <span class='button-icon-one'>
                <QuestionMarkIcon sx={{ width: 40, height: 18 }} />
              </span>
              <span class='side-button-text'>what is your name</span>
              <span class='button-icon-two'>
                <DeleteTwoToneIcon onClick={handleOpen} sx={{ width: 40, height: 18 }} />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3, ml: 3 }}>
                      Are you sure you want to delete this question ?
                    </Typography>
                      <Button sx={{ ml: 7, width: 120 }} onClick={handleClose} variant="outlined">No</Button>
                      <Button sx={{ ml: 3, width: 120 }} onClick={handleClick} variant="contained">Yes</Button>
                  </Box>
                </Modal>
              </span>
            </button> : null
          }
        </section>
      </div>
    </div>
  )
}

export default Flowsetup