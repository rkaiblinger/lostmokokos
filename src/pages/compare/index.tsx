/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import raidsInfo from '../../data/raidsInfo';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Helmet } from 'react-helmet';

const RaidGoldPage: React.FC = () => {
  const [expandedRaids, setExpandedRaids] = useState<{ [key: string]: { [mode: string]: boolean } }>({});

  const toggleRaidExpansion = (raidLabel: string, mode: string) => {
    setExpandedRaids(prev => ({
      ...prev,
      [raidLabel]: {
        ...prev[raidLabel],
        [mode]: !prev[raidLabel]?.[mode]
      }
    }));
  };

  const calculateTotalGold = (goldArray: number[] | undefined) => {
    return goldArray ? goldArray.reduce((sum, gold) => sum + gold, 0) : 0;
  };

  const getRaidData = (raidLabel: string, mode: 'solo' | 'normal' | 'hard') => {
    const normalRaid = raidsInfo.find(raid => raid.label === raidLabel && !raid.path.includes('-hard'));
    const hardRaid = raidsInfo.find(raid => raid.label === raidLabel && raid.path.includes('-hard'));

    switch (mode) {
      case 'solo':
        return normalRaid?.gateData.goldSolo;
      case 'normal':
        return normalRaid?.gateData.gold;
      case 'hard':
        return hardRaid?.gateData.gold;
    }
  };

  return (
    <>
      <Helmet>
        <title>Gold Comparison</title>
      </Helmet>
      <div className="flex flex-col items-center w-full sm:px-4 bg-primary-background-color">
        <h1 className="text-3xl font-bold mb-6 text-primary-text-label-color">Raid Gold Earnings</h1>
        <TableContainer
          component={Paper}
          sx={{
            width: '100%',
            maxWidth: '1000px',
            backgroundColor: 'var(--chip-background-color)',
            color: 'var(--primary-text-color)',
            '.MuiTableCell-root': {
              color: 'var(--primary-text-color)',
              borderBottom: '2px solid var(--primary-text-label-color)',
              paddingLeft: 2,
              paddingRight: 2,
            },
          }}
        >
          <Table aria-label="raid gold table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', width: '200px' }}>Raid</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '20px' }}>Solo</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '20px' }}>Normal</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '20px' }}>Hard</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {raidsInfo.filter(raid => !raid.path.includes('-hard')).map((raid, index) => (
                <TableRow key={raid.label} className={index % 2 === 0 ? 'even-row' : ''}>
                  <TableCell component="th" scope="row" sx={{ textAlign: 'left', fontSize: '20px', width: '200px' }}>
                    <div className="flex items-center">
                      <img src={raid.imgSrc} alt={raid.label} className="w-10 h-10 mr-2" />
                      <span>{raid.label}</span>
                    </div>
                  </TableCell>
                  {['solo', 'normal', 'hard'].map((mode) => {
                    const totalGold = calculateTotalGold(getRaidData(raid.label, mode as 'solo' | 'normal' | 'hard'));
                    return (
                      <TableCell key={mode} align="center" sx={{ fontSize: '20px' }}>
                        {totalGold > 0 ? (
                          <div className="flex items-center justify-center">
                            <span>{totalGold}</span>
                            <IconButton
                              onClick={() => toggleRaidExpansion(raid.label, mode)}
                              size="small"
                              sx={{ color: 'var(--primary-text-color)', ml: 1 }}
                            >
                              {expandedRaids[raid.label]?.[mode] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </IconButton>
                          </div>
                        ) : null}
                        <Collapse in={expandedRaids[raid.label]?.[mode]} timeout="auto" unmountOnExit>
                          <div style={{ fontSize: '20px', textAlign: 'center', marginTop: '8px' }}>
                            {getRaidData(raid.label, mode as 'solo' | 'normal' | 'hard')?.map((gold, index) => (
                              <div key={index}>Gate {index + 1}: {gold}</div>
                            )) || 'N/A'}
                          </div>
                        </Collapse>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default RaidGoldPage;
