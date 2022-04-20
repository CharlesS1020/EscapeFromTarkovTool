// Curency
const R = 'Roubles';
const USD = 'USD';
const E = 'Euros';

// Hardware Items
const analogThermometer = 'analogThermometer';
const aPackOfNails = 'A Pack of Nails';
const bolts = 'Bolts';
const corrugatedHose = 'Corrugated Hose';
const ductTape = 'Duct tape';
const electricDrill = 'Electric drill';
const electricMotor = 'Electric motor';
const heatExchangeAkali = 'Heat-exchange alkali';
const leathermanMultitool = 'Leatherman multitool';
const lightBulb = 'Light bulb';
const pressureGauge = 'Pressure gauge';
const radiatorHelix = 'Radiator helix';
const screwNut = 'Screw nut';
const aPackOfScrews = 'A pack of screws';
const aSetOfTools = 'A set of tools';
const siliconeTube = 'Silicone tube';
const wrench = 'Wrench';
const elitePliers = 'Elite Pliers';
const fireKleanGunLube = 'FireKlean gun lube';
const sparkPlug = 'Spark plug';
const xenomorphSealingFoam = 'Xenomorph sealing foam';
const handDrill = 'Hand drill';
const wd40 = 'WD-40 100ml';
const shustriloSealingFoam = 'Shustrilo sealing foam';

// Electronics
const cpuFan = 'CPU fan';
const capacitors = 'Capacitors';
const carBattery = 'Car battery';
const damagedHardDrive = 'Damaged hard drive';
const phaseControlRelay = 'Phase control relay';
const powerSupplyUnit = 'Power supply unit';
const powercord = 'Powercord';
const printedCircuitBoard = 'Printed circuit board';
const ssdDrive = 'SSD drive';
const secureFlashDrive = 'Secure flash drive';
const wires = 'Wires';
const workingLCD = 'Working LCD';
const nixxorLens = 'NIXXOR lens';
const militaryCOFDM = 'Military COFDM';
const vpxFlashStorageModule = 'VPX Flash Storage Module';
const gasAnalyzer = 'Gas analyzer';
const militaryCable = 'Military cable';

// Medical Items
const medicalBloodset = 'Medical bloodset';
const salineSolution = 'Saline solution';
const sodiumBicarbonate = 'Sodium bicarbonate';
const coffeeMajaica = 'Coffee Majaica';
const ledx = 'LEDX';

// Valuables
const bronzeLion = 'Bronze lion';
const folderWithIntelligence = 'Folder with intelligence';
const goldSkullRing = 'Gold skull ring';
const goldenNeckChain = 'Golden neck chain';
const roler = 'Roler';

/* 
// Totals

// Hardware Items
analogThermometer = 2;
aPackOfNails = 4;
bolts = 18;
corrugatedHose = 26;
ductTape = 6;
electricDrill = 6;
electricMotor = 9;
heatExchangeAkali = 2;
leathermanMultitool = 1;
lightBulb = 14;
pressureGauge = 6;
radiatorHelix = 8;
screwNut = 12;
aPackOfScrews = 20;
aSetOfTools = 6;
siliconeTube = 14;
wrench = 4;
elitePliers = 4;
fireKleanGunLube = 1;
sparkPlug = 1;
xenomorphSealingFoam = 3;
handDrill = 1;
wd40 = 4;
shustriloSealingFoam = 5;

// Electronics
cpuFan = 50;
capacitors = 12;
carBattery = 4;
damagedHardDrive = 4;
phaseControlRelay = 16;
powerSupplyUnit = 15;
powercord = 13;
printedCircuitBoard = 8;
ssdDrive = 1;
secureFlashDrive = 3;
wires = 47;
workingLCD = 2;
nixxorLens = 8;
militaryCOFDM = ;
vpxFlashStorageModule = 2;
gasAnalyzer = 3;
militaryCable = 4;

// Medical
medicalBloodset = 1;
salineSolution = 8;
sodiumBicarbonate = 3;
coffeeMajaica = 3;
ledx = 1;

// Valuables
bronzeLion = 2;
intelligence = 4;
goldSkullRing = 2;
goldenNeckChain = 6;
roler = 3;
*/

var hideout = 'Hideout';

var airFilteringUnit = 10000(USD);

var bitcoinFarm = 10(cpuFan) + 5(powerSupplyUnit) +  5(powerSupplyUnit) +  1(electricDrill);
var bitcoinFarm2 = 15(cpuFan) + 5(powerSupplyUnit) + 5(printedCircuitBoard) + 2(phaseControlRelay);
var bitcoinFarm3 = 25(cpuFan) + 10(siliconeTube) + 1(electricMotor) + 2(pressureGauge);



var boozeGenerator = 4(siliconeTube) + 2(analogThermometer) + 2(pressureGauge) + 5 (corrugatedHose)

var generator = 100000(R);
var genartor2 = 5(phaseControlRelay) + 1(electricMotor) + 15(wires);
var generator3 = 6(phaseControlRelay) + 2(electricMotor) + 5(sparkPlug) + 5(powerSupplyUnit);

var heating = 25000(R);
var heating2 = 50000(R);
var heating3 = 8(radiatorHelix) + 8(wires);

var illumination = 10000(R);
var illumination2 = 14(lightBulb) + 5(wires);
var illumination3 = 50000(R) + 7(capacitors);

var intelligenceCenter = 1(folderWithIntelligence);
var intelligenceCenter2 = 3(folderWithIntelligence) + 3(secureFlashDrive) + 4(powercord) + 4(damagedHardDrive);
var intelligenceCenter3 = 2(militaryCOFDM) + 2(vpxFlashStorageModule) + 3(gasAnalyzer) + 4(militaryCable);

var lavatory = 2000(R);
var lavatory2 = 3(corrugatedHose) + 5(aPackOfScrews) + 1(electricDrill);
var lavatrory3 = 6(corrugatedHose) + 2(pressureGauge) + 1(aSetOfTools) + 3(xenomorphSealingFoam);

var library = 400000(R);

var medstation = 25000(R);
var medstation2 = 50000(R) + 1(medicalBloodset) + 3(salineSolution);
var medstation3 = 150000(R) + 5(salineSolution) + 1(ledx);

var nutritionUnit = 25000(R) + 2(phaseControlRelay);
var nutritionUnit2 = 4(wrench) + 2(corrugatedHose) + 2(heatExchangeAkali) + 1(phaseControlRelay);
var nutritionUnit3 = 125000(R) + 3(coffeeMajaica) + 3(sodiumBicarbonate);
/*
var restSpace = 
var restSpace2 = 
var restSpace3 = 
var scavCase = 
var security = 
var secuirty2 = 
var security3 = 

var shootingRange = 

var solarPower = 

var stash = 
var stash2 = 
var stash3 = 

var vents = 
var vents2 = 
var vents3 = 

var waterCollector = 
var waterCollector2 = 
var waterCollector3 = 

var workbench = 
var workbench2 = 
var workbench3 = 
*/










































