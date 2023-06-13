import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from '@mui/x-data-grid';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Modal from '@mui/material/Modal';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SaveIcon from '@mui/icons-material/Save';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import Tooltip from "@mui/material/Tooltip";
import Typography from '@mui/material/Typography';
import { useNavigate, } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: '16px',
  boxShadow: "0px 2px 0px 0px #4CAF50,0px 2px 25px 5px #4CAF50",
  p: 4,
};

export default function DataGridDemo() {

  const [tabValue, setTabValue] = React.useState('1');

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedQRC, setSelectedQRC] = useState({
    DoD: '',
  });
  
  const goToQRC = (params) => {
    setSelectedQRC(params.row);
    navigate('/selectedQRC', {state: params.row});
    // console.log("params.row from go to userdetails function", params.row)
  } 

  console.log("selectedQRC", selectedQRC);

  const navigate = useNavigate();
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'checklistName',
      headerName: 'Checklist Name',
      width: 800,
    },
    {
      field: "Open",
      minWidth: 10,
      editable: true,
      renderCell: (params) => (
        <Tooltip title="Edit Item">
          <OpenInNewIcon
            sx={{ cursor: "pointer", color: "#4CAF50" }}
            onClick={() => goToQRC(params)}
          />
        </Tooltip>
      ),
    },
  ];
  
  const rows = [
    { id: 1, checklistName: 'Active Shooter' },
    { id: 2, checklistName: 'Alarm Activation/Anti Robbery' },
    { id: 3, checklistName: 'Alarm Failure' },
    { id: 4, checklistName: 'Anti-Hijacking' },
    { id: 5, checklistName: 'Arms, Ammo & Explosive Arrival' },
    { id: 6, checklistName: 'Assault' },
    { id: 7, checklistName: 'Barricaded Suspect' },
    { id: 8, checklistName: 'BDOC Evacuation' },
  ];


  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <Box>
        <Typography variant='h4' sx={{ display:'flex', justifyContent: 'center', mt: 1}}> 45 SFS QRC List </Typography>
      </Box>
      <Button onClick={handleOpen}>Add QRC</Button>
      <DataGrid
        sx={{ mt: 2}}
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
        // checkboxSelection
        disableRowSelectionOnClick
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >

          <Box sx={style}>


        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="QRC Information" value="1" />
                <Tab label="Actions" value="2" />
                <Tab label="Notifications" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
            <TextField 
              sx={{ width: "75%", height: 30 }}
              id="filled-basic" 
              label="QRC Title" 
              variant="standard" 
              />
              <TextField 
                sx={{ width: "50%", mt: 2.5}}
                id="filled-basic" 
                label= "QRC #" 
                variant="standard" 
                />
              <TextField 
                sx={{ width: "100%", mt: 2.5}}
                id="filled-basic" 
                label="Description" 
                variant="standard" 
                multiline
                maxRows= {6}
                />
                </TabPanel>

        <TabPanel value="2">
          <Box sx={{display:'flex', flexDirection:'row'}}>
              <Button 
                // variant="outlined"
                startIcon={<AddCircleIcon/> }
                size="small"
                // onClick={handleAddOpen}
                // color='secondary'
              >
                ADD ACTION
              </Button>
          </Box>
          <Box sx={{display:'flex', flexDirection:'column'}}>
            <TextField 
              sx={{ width: "75%", mt: 2.5}}
              id="filled-basic" 
              label= "Action" 
              variant="standard" 
            />
            <TextField 
              sx={{ width: "75%", mt: 2.5}}
              id="filled-basic" 
              label= "Action" 
              variant="standard" 
            />
            <TextField 
              sx={{ width: "75%", mt: 2.5}}
              id="filled-basic" 
              label= "Action" 
              variant="standard" 
            />
          </Box>
        </TabPanel>

        <TabPanel value="3">
          <Box sx={{ display: 'flex' }}>
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
        </TabPanel>
      </TabContext>
    </Box>

      <Box sx={{mt:1}}>
        <Button
              variant="outlined"
              startIcon={<CancelIcon />}
              onClick={handleClose}
            >
              Cancel
        </Button>
        <Button sx={{ml:1}} variant="contained" startIcon={<SaveIcon />}
              onClick={handleClose}>
          Submit
        </Button>
      </Box>
      </Box>
    </Modal>
</Box>
  );
}