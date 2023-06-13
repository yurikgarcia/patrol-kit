import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Tooltip from "@mui/material/Tooltip";
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
  boxShadow: "0px 2px 0px 0px #FF9A01,0px 2px 25px 5px #FF9A01",
  p: 4,
};


export default function DataGridDemo() {

  const [openChecklistEditor, setOpenChecklistEditor] = React.useState(false);
  const handleOpen = () => setOpenChecklistEditor(true);
  const handleClose = () => setOpenChecklistEditor(false);

  const [notifications, setNotifications] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setNotifications({
      ...notifications,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = notifications;


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'actionTask',
      headerName: 'Action/Task',
      width: 800,
    },
    {
      field: 'notes',
      headerName: 'Notes',
      width: 650,
    },
    {
      field: "Edit",
      minWidth: 10,
      editable: true,
      renderCell: (params) => (
        <Tooltip title="Edit Item">
          <EditNoteIcon
            sx={{ cursor: "pointer", color: "#bdbdbd" }}
            onClick={() => handleOpen(params)}
          />
        </Tooltip>
      ),
    },
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
    <Box>
      <Typography variant='h4' sx={{ display:'flex', justifyContent: 'center', mt: 1}}> QRC Editor</Typography>
    </Box>
    <Box sx={{ display:'flex', justifyContent: 'center'}}
    >
    <Card 
      sx={{ 
        width: "90vh", 
        mt:2, mb:2, 
        boxShadow: "0px 2px 0px 0px #FF9A01,0px 2px 25px 5px #FF9A01",
        borderRadius: '16px',
      }}
        
    >
        <Box 
          sx={{
            display:'flex', 
            flexDirection: 'row', 
            ml: 1.5, mt: 1.5,
          }}
          > 
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            1
          </Avatar>
        <Box sx={{display:'flex', flexDirection: 'column', width: '90%', ml: 1.5}}>
          <TextField 
            sx={{ width: "75%", height: 30 }}
            id="filled-basic" 
            label="Title" 
            variant="standard" 
            defaultValue="Active Shooter BANG - BANG" 
            />
            <TextField 
              sx={{ width: "50%", mt: 2.5}}
              id="filled-basic" 
              label="Subtitle" 
              variant="standard" 
              defaultValue="QRC #01" 
              />
            </Box>
          </Box>
      <CardContent>
      <TextField 
              sx={{ width: "100%", mt: 2.5}}
              id="filled-basic" 
              label="Description" 
              variant="standard" 
              multiline
              maxRows= {6}
              defaultValue=" An active shooter is defined as an armed person who has used deadly force on other persons
              and continued to do so. The objective is to neutralize the threat(s), save the immediate area, render aid to victims, 
              clear the building(s) and protect the crime scene." 
              />
      </CardContent>
        <Button 
          // variant="outlined"
          startIcon={<EditIcon/> }
          size="small"
          onClick={handleOpen}
          // color='secondary'
          sx={{display:'flex', justifyContent:'flex-end', ml: 1.5, mb: 1.5}}
        >
          Edit Notifications
        </Button>
    </Card>
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
        disableRowSelectionOnClick
      />
      </Box>
        <Modal
          open={openChecklistEditor}
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
            Edit QRC #1 Active Shooter Notifications
            </Typography>
          </Box>

          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Assign Notifications</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                    }
                    label="Ops NCOIC/MSgt Aenchbacher, 4-1327/907-301-7643"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={jason} onChange={handleChange} name="jason" />
                    }
                    label="Ops Superintendent/SMSgt Scruggs, 4-4664/321-419-3323"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                    }
                    label="Ops Officer/Capt. Gomez, 4-6231/321-412-6279"
                  />
                </FormGroup>
            </FormControl>


        </Box>
      </Modal>
    </Box>
  );
}