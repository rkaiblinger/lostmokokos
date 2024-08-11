/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import raidsInfo from '../../data/raidsInfo';
import chaosInfo from '../../data/chaosInfo';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton, Tabs, Tab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Helmet } from 'react-helmet';

const ComparePage: React.FC = () => {
  const [expandedRaids, setExpandedRaids] = useState<{ [key: string]: { [mode: string]: boolean } }>({});
  const [currentTab, setCurrentTab] = useState(0);

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
    const normalRaid = raidsInfo.find(raid => raid.label === raidLabel && !raid.path.includes('-hard') && !raid.path.includes('-solo'));
    const soloRaid = raidsInfo.find(raid => raid.label === raidLabel && raid.path.includes('-solo'));
    const hardRaid = raidsInfo.find(raid => raid.label === raidLabel && raid.path.includes('-hard'));

    switch (mode) {
      case 'solo':
        return soloRaid?.gateData.gold;
      case 'normal':
        return normalRaid?.gateData.gold;
      case 'hard':
        return hardRaid?.gateData.gold;
    }
  };

  const renderGoldTab = () => (
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
          {raidsInfo.filter(raid => !raid.path.includes('-hard') && !raid.path.includes('-solo')).map((raid, index) => (
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
  );

  const renderChaosDungeonTab = () => (
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
      <Table aria-label="chaos dungeon table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '20px' }}>Dungeon</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '20px' }}>Item Level</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '20px' }}>Destruction Stones</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '20px' }}>Guardian Stones</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '20px' }}>Leapstones</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '20px' }}>Gems</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '20px' }}>Honor Shards</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '20px' }}>Silver</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {chaosInfo.map((dungeon, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'even-row' : ''}>
              <TableCell component="th" scope="row" sx={{ textAlign: 'left', fontSize: '20px' }}>{dungeon.label}</TableCell>
              <TableCell align="center" sx={{ fontSize: '20px' }}>{dungeon.itemLevel}</TableCell>
              <TableCell align="center" sx={{ fontSize: '20px' }}>{dungeon.destructionStone}</TableCell>
              <TableCell align="center" sx={{ fontSize: '20px' }}>{dungeon.guardiannStone}</TableCell>
              <TableCell align="center" sx={{ fontSize: '20px' }}>{dungeon.leapstone}</TableCell>
              <TableCell align="center" sx={{ fontSize: '20px' }}>{dungeon.gem}</TableCell>
              <TableCell align="center" sx={{ fontSize: '20px' }}>{dungeon.honorShard}</TableCell>
              <TableCell align="center" sx={{ fontSize: '20px' }}>{dungeon.silver}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderGuardianRaidTab = () => (
    <div className="text-primary-text-color">
      <h2 className="text-2xl font-bold mb-4">Guardian Raid</h2>
      <p>Content for Guardian Raid tab goes here.</p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Comparison Page</title>
      </Helmet>
      <div className="flex flex-col items-center w-full sm:px-4 bg-primary-background-color">
        <h1 className="text-3xl font-bold mb-6 text-primary-text-label-color">Comparison Page</h1>
        <Tabs
          value={currentTab}
          onChange={(_, newValue) => setCurrentTab(newValue)}
          centered
          className="mb-6"
          sx={{
            '& .MuiTab-root': { color: 'var(--primary-text-color)' },
            '& .Mui-selected': { color: 'var(--primary-text-label-color)' },
          }}
        >
          <Tab label="Gold" />
          <Tab label="Chaos Dungeon" />
          <Tab label="Guardian Raid" />
        </Tabs>
        {currentTab === 0 && renderGoldTab()}
        {currentTab === 1 && renderChaosDungeonTab()}
        {currentTab === 2 && renderGuardianRaidTab()}
      </div>
    </>
  );
};

export default ComparePage;