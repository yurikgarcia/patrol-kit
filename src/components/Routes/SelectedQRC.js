import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: '16px',
  boxShadow: "0px 2px 0px 0px #c62828,0px 2px 25px 5px #c62828",
  p: 4,
};


export default function DataGridDemo() {

  const [openNotifications, setOpenNotifications] = React.useState(false);
  const handleOpen = () => setOpenNotifications(true);
  const handleClose = () => setOpenNotifications(false);



  const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'actionTask',
      headerName: 'Action/Task',
      width: 800,
    },
    {
      field: 'notes',
      headerName: 'Notes',
      width: 800,
    }
  ];
  
  const rows = [
    { id: 1, actionTask: 'Do SOmething Dont Just Stand There DUMBASS' },
    { id: 2, actionTask: 'Do SOmething Dont Just Stand There DUMBASS' },
    { id: 3, actionTask: 'Do SOmething Dont Just Stand There DUMBASS' },
    { id: 4, actionTask: 'Do SOmething Dont Just Stand There DUMBASS' },
    { id: 5, actionTask: 'Do SOmething Dont Just Stand There DUMBASS' },
    { id: 6, actionTask: 'Do SOmething Dont Just Stand There DUMBASS' },
    { id: 7, actionTask: 'Do SOmething Dont Just Stand There DUMBASS' },

  ];



  return (

    
  <Box sx={{ height: 600, width: '100%' }}>
    <Box sx={{ display:'flex', justifyContent: 'center'}}>
    <Card sx={{ width: "90vh", mt:2, mb:2}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            1
          </Avatar>
        }

        title="Active Shooter BANG - BANG"
        subheader="QRC #01"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        An active shooter is defined as an armed person who has used deadly force on other persons
        and continued to do so. The objective is to neutralize the threat(s), save the immediate area, render aid to victims, 
        clear the building(s) and protect the crime scene.
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'row'  }}>
        <IconButton aria-label="add to favorites" onClick={handleOpen}>
          <EmergencyShareIcon />
        </IconButton>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
          <IconButton aria-label="add to favorites" href="/editQRC">
            <EditNoteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>

    <Box sx={{ display: 'flex', justifyContent: 'flex-end', ml: 10 }}>
      <Card sx={{ width: '45vh', mt: 2, mb: 2 }}>
        <CardHeader
          title="Required Forms"
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
      </Card>
    </Box>


    </Box>

    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[25]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </Box>
        <Modal
          open={openNotifications}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Box sx={{display:'flex', flexDirection:'row', mb:1}}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                1
            </Avatar>
            <Typography sx={{ml:1, mt:0.5}} id="modal-modal-title" variant="h5" component="h2">
            QRC #1 Active Shooter Notifications
            </Typography>
          </Box>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} 
              label="Ops NCOIC/MSgt Aenchbacher, 4-1327/907-301-7643" 
            />
            <FormControlLabel control={<Checkbox />} 
              label="Ops Superintendent/SMSgt Scruggs, 4-4664/321-419-3323" 
            />
            <FormControlLabel control={<Checkbox />} 
              label="Ops Officer/Capt. Gomez, 4-6231/321-412-6279" 
            />
            <FormControlLabel control={<Checkbox />} 
              label="45 FS SEL/CMSgt Griffith, 4-5270/501-422-9592" 
            />
          </FormGroup>
        </Box>
      </Modal>
    </Box>
  );
}