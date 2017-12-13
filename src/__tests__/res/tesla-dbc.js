export const TESLA_DBC = `
VERSION ""


NS_ :
    NS_DESC_
    CM_
    BA_DEF_
    BA_
    VAL_
    CAT_DEF_
    CAT_
    FILTER
    BA_DEF_DEF_
    EV_DATA_
    ENVVAR_DATA_
    SGTYPE_
    SGTYPE_VAL_
    BA_DEF_SGTYPE_
    BA_SGTYPE_
    SIG_TYPE_REF_
    VAL_TABLE_
    SIG_GROUP_
    SIG_VALTYPE_
    SIGTYPE_VALTYPE_
    BO_TX_BU_
    BA_DEF_REL_
    BA_REL_
    BA_DEF_DEF_REL_
    BU_SG_REL_
    BU_EV_REL_
    BU_BO_REL_
    SG_MUL_VAL_

BS_:

BU_:
    NEO
    MCU
    GTW
    EPAS
    DI
    ESP
    SBW
    STW

VAL_TABLE_ StW_AnglHP_Spd 16383 "SNA" ;
VAL_TABLE_ DI_aebFaultReason 15 "DI_AEB_FAULT_DAS_REQ_DI_UNAVAIL" 14 "DI_AEB_FAULT_ACCEL_REQ_INVALID" 13 "DI_AEB_FAULT_MIN_TIME_BTWN_EVENTS" 12 "DI_AEB_FAULT_ESP_MIA" 11 "DI_AEB_FAULT_ESP_FAULT" 10 "DI_AEB_FAULT_EPB_NOT_PARKED" 9 "DI_AEB_FAULT_ACCEL_OUT_OF_BOUNDS" 8 "DI_AEB_FAULT_PM_REQUEST" 7 "DI_AEB_FAULT_VEL_EST_ABNORMAL" 6 "DI_AEB_FAULT_DAS_SNA" 5 "DI_AEB_FAULT_DAS_CONTROL_MIA" 4 "DI_AEB_FAULT_SPEED_DELTA" 3 "DI_AEB_FAULT_EBR_FAULT" 2 "DI_AEB_FAULT_PM_MIA" 1 "DI_AEB_FAULT_EPB_MIA" 0 "DI_AEB_FAULT_NONE" ;
VAL_TABLE_ DI_aebLockState 3 "AEB_LOCK_STATE_SNA" 2 "AEB_LOCK_STATE_UNUSED" 1 "AEB_LOCK_STATE_UNLOCKED" 0 "AEB_LOCK_STATE_LOCKED" ;
VAL_TABLE_ DI_aebSmState 7 "DI_AEB_STATE_FAULT" 6 "DI_AEB_STATE_EXIT" 5 "DI_AEB_STATE_STANDSTILL" 4 "DI_AEB_STATE_STOPPING" 3 "DI_AEB_STATE_ENABLE" 2 "DI_AEB_STATE_ENABLE_INIT" 1 "DI_AEB_STATE_STANDBY" 0 "DI_AEB_STATE_UNAVAILABLE" ;
VAL_TABLE_ DI_aebState 7 "AEB_CAN_STATE_SNA" 4 "AEB_CAN_STATE_FAULT" 3 "AEB_CAN_STATE_STANDSTILL" 2 "AEB_CAN_STATE_ENABLED" 1 "AEB_CAN_STATE_STANDBY" 0 "AEB_CAN_STATE_UNAVAILABLE" ;
VAL_TABLE_ DI_epbInterfaceReady 1 "EPB_INTERFACE_READY" 0 "EPB_INTERFACE_NOT_READY" ;
VAL_TABLE_ DI_gear 7 "DI_GEAR_SNA" 4 "DI_GEAR_D" 3 "DI_GEAR_N" 2 "DI_GEAR_R" 1 "DI_GEAR_P" 0 "DI_GEAR_INVALID" ;
VAL_TABLE_ DI_gpoReason 8 "DI_GPO_NUMREASONS" 7 "DI_GPO_CAPACITOR_OVERTEMP" 6 "DI_GPO_NOT_ENOUGH_12V" 5 "DI_GPO_NO_BATTERY_POWER" 4 "DI_GPO_AMBIENT_OVERTEMP" 3 "DI_GPO_FLUID_DELTAT" 2 "DI_GPO_STATOR_OVERTEMP" 1 "DI_GPO_HEATSINK_OVERTEMP" 0 "DI_GPO_OUTLET_OVERTEMP" ;
VAL_TABLE_ DI_immobilizerCondition 1 "DI_IMM_CONDITION_LEARNED" 0 "DI_IMM_CONDITION_VIRGIN_SNA" ;
VAL_TABLE_ DI_immobilizerState 7 "DI_IMM_STATE_FAULT" 6 "DI_IMM_STATE_FAULTRETRY" 5 "DI_IMM_STATE_RESET" 4 "DI_IMM_STATE_LEARN" 3 "DI_IMM_STATE_DISARMED" 2 "DI_IMM_STATE_AUTHENTICATING" 1 "DI_IMM_STATE_REQUEST" 0 "DI_IMM_STATE_INIT_SNA" ;
VAL_TABLE_ DI_limpReason 24 "DI_LIMP_NUMREASONS" 23 "DI_LIMP_CAPACITOR_OVERTEMP" 22 "DI_LIMP_GTW_MIA" 21 "DI_LIMP_TRQCMD_VALIDITY_UNKNOWN" 20 "DI_LIMP_DI_MIA" 19 "DI_LIMP_CONFIG_MISMATCH" 18 "DI_LIMP_HEATSINK_TEMP" 17 "DI_LIMP_PMREQUEST" 16 "DI_LIMP_PMHEARTBEAT" 15 "DI_LIMP_TRQ_CROSS_CHECK" 14 "DI_LIMP_EXTERNAL_COMMAND" 13 "DI_LIMP_WRONG_CS_CALIBRATION" 12 "DI_LIMP_STATOR_TEMP" 11 "DI_LIMP_DELTAT_TOO_NEGATIVE" 10 "DI_LIMP_DELTAT_TOO_POSITIVE" 9 "DI_LIMP_AMBIENT_TEMP" 8 "DI_LIMP_OUTLET_TEMP" 7 "DI_LIMP_LOW_FLOW" 6 "DI_LIMP_BMS_MIA" 5 "DI_LIMP_12V_SUPPLY_UNDERVOLTAGE" 4 "DI_LIMP_NO_FLUID" 3 "DI_LIMP_NO_FUNC_HEATSINK_SENSOR" 2 "DI_LIMP_NO_FUNC_STATORT_SENSOR" 1 "DI_LIMP_BUSV_SENSOR_IRRATIONAL" 0 "DI_LIMP_PHASE_IMBALANCE" ;
VAL_TABLE_ DI_mode 2 "DI_MODE_DYNO" 1 "DI_MODE_DRIVE" 0 "DI_MODE_UNDEF" ;
VAL_TABLE_ DI_motorType 14 "DI_MOTOR_F2AE" 13 "DI_MOTOR_F2AD" 12 "DI_MOTOR_F2AC" 11 "DI_MOTOR_F2AB" 10 "DI_MOTOR_F1AC" 9 "DI_MOTOR_SSR1A" 8 "DI_MOTOR_F1A" 7 "DI_MOTOR_M7M6" 6 "DI_MOTOR_M8A" 5 "DI_MOTOR_M7M5" 4 "DI_MOTOR_M7M4" 3 "DI_MOTOR_M7M3" 2 "DI_MOTOR_ROADSTER_SPORT" 1 "DI_MOTOR_ROADSTER_BASE" 0 "DI_MOTOR_SNA" ;
VAL_TABLE_ DI_speedUnits 1 "DI_SPEED_KPH" 0 "DI_SPEED_MPH" ;
VAL_TABLE_ DI_state 4 "DI_STATE_ENABLE" 3 "DI_STATE_FAULT" 2 "DI_STATE_CLEAR_FAULT" 1 "DI_STATE_STANDBY" 0 "DI_STATE_PREAUTH" ;
VAL_TABLE_ DI_velocityEstimatorState 4 "VE_STATE_BACKUP_MOTOR" 3 "VE_STATE_BACKUP_WHEELS_B" 2 "VE_STATE_BACKUP_WHEELS_A" 1 "VE_STATE_WHEELS_NORMAL" 0 "VE_STATE_NOT_INITIALIZED" ;


BO_ 1160 DAS_steeringControl: 4 NEO
 SG_ DAS_steeringControlType : 23|2@0+ (1,0) [0|0] "" EPAS
 SG_ DAS_steeringControlChecksum : 31|8@0+ (1,0) [0|0] "" EPAS
 SG_ DAS_steeringControlCounter : 19|4@0+ (1,0) [0|0] "" EPAS
 SG_ DAS_steeringAngleRequest : 6|15@0+ (0.1,-1638.35) [-1638.35|1638.35] "deg" EPAS
 SG_ DAS_steeringHapticRequest : 7|1@0+ (1,0) [0|0] "" EPAS

BO_ 257 GTW_epasControl: 3 NEO
 SG_ GTW_epasControlChecksum : 16|8@1+ (1,0) [0|255] "" NEO
 SG_ GTW_epasControlCounter : 12|4@1+ (1,0) [0|15] "" NEO
 SG_ GTW_epasControlType : 8|2@1+ (1,0) [4|-1] "" NEO
 SG_ GTW_epasEmergencyOn : 0|1@1+ (1,0) [2|-1] "" NEO
 SG_ GTW_epasLDWEnabled : 11|1@1+ (1,0) [2|-1] "" NEO
 SG_ GTW_epasPowerMode : 1|4@1+ (1,0) [4|14] "" NEO
 SG_ GTW_epasTuneRequest : 5|3@1+ (1,0) [8|-1] "" NEO

BO_ 880 EPAS_sysStatus: 8 EPAS
 SG_ EPAS_currentTuneMode : 0|4@1+ (1,0) [8|15] "" NEO
 SG_ EPAS_eacErrorCode : 16|4@1+ (1,0) [16|-1] "" NEO
 SG_ EPAS_eacStatus : 48|3@1+ (1,0) [5|7] "" NEO
 SG_ EPAS_handsOnLevel : 32|2@1+ (1,0) [4|-1] "" NEO
 SG_ EPAS_internalSAS : 37|14@0+ (0.10,-819.200010) [0|0] "deg" NEO
 SG_ EPAS_steeringFault : 5|1@1+ (1,0) [2|-1] "" NEO
 SG_ EPAS_steeringRackForce : 1|10@0+ (50,-25575) [0|0] "N" NEO
 SG_ EPAS_steeringReduced : 4|1@1+ (1,0) [2|-1] "" NEO
 SG_ EPAS_sysStatusChecksum : 56|8@1+ (1,0) [0|255] "" NEO
 SG_ EPAS_sysStatusCounter : 52|4@1+ (1,0) [0|15] "" NEO
 SG_ EPAS_torsionBarTorque : 19|12@0+ (0.010,-20.50) [0|0] "Nm" NEO

BO_ 3 STW_ANGL_STAT: 8 STW
 SG_ CRC_STW_ANGL_STAT : 56|8@1+ (1,0) [0|255] "" NEO
 SG_ MC_STW_ANGL_STAT : 52|4@1+ (1,0) [0|15] "" NEO
 SG_ StW_Angl : 5|14@0+ (0.50,-2048) [0|0] "deg" NEO
 SG_ StW_AnglSens_Id : 36|2@1+ (1,0) [3|3] "" NEO
 SG_ StW_AnglSens_Stat : 38|2@1+ (1,0) [4|-1] "" NEO
 SG_ StW_AnglSpd : 21|14@0+ (0.50,-2048) [0|0] "/s" NEO

BO_ 14 STW_ANGLHP_STAT: 8 GTW
 SG_ StW_AnglHP : 5|14@0+ (0.1,-819.2) [-819.2|819] "deg" NEO
 SG_ StW_AnglHP_Spd : 21|14@0+ (0.5,-4096) [-4096|4095.5] "deg/s" NEO
 SG_ StW_AnglHP_Sens_Stat : 33|2@0+ (1,0) [0|0] "" NEO
 SG_ StW_AnglHP_Sens_Id : 35|2@0+ (1,0) [0|0] "" NEO
 SG_ MC_STW_ANGLHP_STAT : 55|4@0+ (1,0) [0|15] "" NEO
 SG_ CRC_STW_ANGLHP_STAT : 63|8@0+ (1,0) [0|0] "" NEO

BO_ 264 DI_torque1: 8 DI
 SG_ DI_torqueDriver : 0|13@1- (0.25,0) [-750|750] "Nm" NEO
 SG_ DI_torque1Counter : 13|3@1+ (1,0) [0|0] "" NEO
 SG_ DI_torqueMotor : 16|13@1- (0.25,0) [-750|750] "Nm" NEO
 SG_ DI_soptState : 29|3@1+ (1,0) [0|0] "" NEO
 SG_ DI_motorRPM : 32|16@1- (1,0) [-17000|17000] "RPM" NEO
 SG_ DI_pedalPos : 48|8@1+ (0.4,0) [0|100] "%" NEO
 SG_ DI_torque1Checksum : 56|8@1+ (1,0) [0|0] "" NEO

BO_ 280 DI_torque2: 6 DI
 SG_ DI_torqueEstimate : 0|12@1- (0.5,0) [-750|750] "Nm" NEO
 SG_ DI_gear : 12|3@1+ (1,0) [0|0] "" NEO
 SG_ DI_brakePedal : 15|1@1+ (1,0) [0|0] "" NEO
 SG_ DI_vehicleSpeed : 16|12@1+ (0.05,-25) [-25|179.75] "MPH" NEO
 SG_ DI_gearRequest : 28|3@1+ (1,0) [0|0] "" NEO
 SG_ DI_torqueInterfaceFailure : 31|1@1+ (1,0) [0|0] "" NEO
 SG_ DI_torque2Counter : 32|4@1+ (1,0) [0|0] "" NEO
 SG_ DI_brakePedalState : 36|2@1+ (1,0) [0|0] "" NEO
 SG_ DI_epbParkRequest : 38|1@1+ (1,0) [0|0] "" NEO
 SG_ DI_epbInterfaceReady : 39|1@1+ (1,0) [0|0] "" NEO
 SG_ DI_torque2Checksum : 40|8@1+ (1,0) [0|0] "" NEO

BO_ 309 ESP_135h: 5 ESP
 SG_ ESP_135hChecksum : 16|8@1+ (1,0) [0|255] "" NEO
 SG_ ESP_135hCounter : 12|4@1+ (1,0) [0|15] "" NEO
 SG_ ESP_absBrakeEvent : 5|1@1+ (1,0) [2|-1] "" NEO
 SG_ ESP_brakeDiscWipingActive : 3|1@1+ (1,0) [2|-1] "" NEO
 SG_ ESP_brakeLamp : 4|1@1+ (1,0) [2|-1] "" NEO
 SG_ ESP_espFaultLamp : 1|1@1+ (1,0) [2|-1] "" NEO
 SG_ ESP_espLampFlash : 0|1@1+ (1,0) [2|-1] "" NEO
 SG_ ESP_hillStartAssistActive : 6|2@1+ (1,0) [4|-1] "" NEO
 SG_ ESP_messagePumpService : 31|1@1+ (1,0) [0|1] "" NEO
 SG_ ESP_messagePumpFailure : 30|1@1+ (1,0) [0|1] "" NEO
 SG_ ESP_messageEBDFailure : 29|1@1+ (1,0) [0|1] "" NEO
 SG_ ESP_absFaultLamp : 28|1@1+ (1,0) [2|-1] "" NEO
 SG_ ESP_tcDisabledByFault : 27|1@1+ (1,0) [0|1] "" NEO
 SG_ ESP_messageDynoModeActive : 26|1@1+ (1,0) [0|1] "" NEO
 SG_ ESP_hydraulicBoostEnabled : 25|1@1+ (1,0) [0|1] "" NEO
 SG_ ESP_espOffLamp : 24|1@1+ (1,0) [2|-1] "" NEO
 SG_ ESP_stabilityControlSts : 9|3@1+ (1,0) [6|7] "" NEO
 SG_ ESP_tcLampFlash : 2|1@1+ (1,0) [2|-1] "" NEO
 SG_ ESP_tcOffLamp : 8|1@1+ (1,0) [0|1] "" NEO

BO_ 792 GTW_carState: 8 GTW
 SG_ BOOT_STATE : 40|2@1+ (1,0) [4|-1] "" NEO
 SG_ CERRD : 0|1@1+ (1,0) [2|-1] "" NEO
 SG_ DAY : 35|5@1+ (1,0) [2|31] "" NEO
 SG_ DOOR_STATE_FL : 10|2@1+ (1,0) [4|-1] "" NEO
 SG_ DOOR_STATE_FR : 8|2@1+ (1,0) [4|-1] "" NEO
 SG_ DOOR_STATE_FrontTrunk : 52|2@1+ (1,0) [4|-1] "" NEO
 SG_ DOOR_STATE_RL : 16|2@1+ (1,0) [4|-1] "" NEO
 SG_ DOOR_STATE_RR : 25|2@1+ (1,0) [4|-1] "" NEO
 SG_ GTW_updateInProgress : 54|2@1+ (1,0) [4|-1] "" NEO
 SG_ Hour : 27|5@1+ (1,0) [0|29] "h" NEO
 SG_ MCU_factoryMode : 51|1@1+ (1,0) [2|-1] "" NEO
 SG_ MCU_transportModeOn : 50|1@1+ (1,0) [1|1] "" NEO
 SG_ MINUTE : 42|6@1+ (1,0) [0|61] "min" NEO
 SG_ MONTH : 12|4@1+ (1,0) [0|14] "Month" NEO
 SG_ SECOND : 18|6@1+ (1,0) [0|61] "s" NEO
 SG_ YEAR : 1|7@1+ (1,2000) [2000|2125] "Year" NEO

BO_ 872 DI_state: 8 DI
 SG_ DI_aebState : 44|3@1+ (1,0) [5|6] "" NEO
 SG_ DI_analogSpeed : 20|12@1+ (0.10,0) [0|409.40] "speed" NEO
 SG_ DI_cruiseSet : 39|9@1+ (0.50,0) [0|255.50] "speed" NEO
 SG_ DI_cruiseState : 8|4@1+ (1,0) [8|15] "" NEO
 SG_ DI_digitalSpeed : 48|8@1+ (1,0) [0|254] "" NEO
 SG_ DI_driveReady : 0|1@1+ (1,0) [0|1] "" NEO
 SG_ DI_immobilizerState : 25|3@1+ (1,0) [7|7] "" NEO
 SG_ DI_proximity : 1|1@1+ (1,0) [0|1] "" NEO
 SG_ DI_regenLight : 15|1@1+ (1,0) [0|1] "" NEO
 SG_ DI_speedUnits : 24|1@1+ (1,0) [2|-1] "" NEO
 SG_ DI_state : 12|3@1+ (1,0) [5|7] "" NEO
 SG_ DI_stateChecksum : 56|8@1+ (1,0) [0|255] "" NEO
 SG_ DI_stateCounter : 40|4@1+ (1,0) [0|15] "" NEO
 SG_ DI_systemState : 5|3@1+ (1,0) [5|7] "" NEO
 SG_ DI_vehicleHoldState : 2|3@1+ (1,0) [8|-1] "" NEO

BO_ 109 SBW_RQ_SCCM: 4 STW
 SG_ StW_Sw_Stat3 : 0|3@1+ (1,0) [0|0] "" NEO
 SG_ MsgTxmtId : 6|2@1+ (1,0) [0|0] "" NEO
 SG_ TSL_RND_Posn_StW : 8|4@1+ (1,0) [0|0] "" NEO
 SG_ TSL_P_Psd_StW : 12|2@1+ (1,0) [0|0] "" NEO
 SG_ MC_SBW_RQ_SCCM : 20|4@1+ (1,0) [0|15] "" NEO
 SG_ CRC_SBW_RQ_SCCM : 24|8@1+ (1,0) [0|0] "" NEO

BO_ 69 STW_ACTN_RQ: 8 STW
 SG_ SpdCtrlLvr_Stat : 0|6@1+ (1,0) [0|0] "" NEO
 SG_ VSL_Enbl_Rq : 6|1@1+ (1,0) [0|0] "" NEO
 SG_ SpdCtrlLvrStat_Inv : 7|1@1+ (1,0) [0|0] "" NEO
 SG_ DTR_Dist_Rq : 8|8@1+ (1,0) [0|200] "" NEO
 SG_ TurnIndLvr_Stat : 16|2@1+ (1,0) [0|0] "" NEO
 SG_ HiBmLvr_Stat : 18|2@1+ (1,0) [0|0] "" NEO
 SG_ WprWashSw_Psd : 20|2@1+ (1,0) [0|0] "" NEO
 SG_ WprWash_R_Sw_Posn_V2 : 22|2@1+ (1,0) [0|0] "" NEO
 SG_ StW_Lvr_Stat : 24|3@1+ (1,0) [0|0] "" NEO
 SG_ StW_Cond_Flt : 27|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Cond_Psd : 28|2@1+ (1,0) [0|0] "" NEO
 SG_ HrnSw_Psd : 30|2@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw00_Psd : 32|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw01_Psd : 33|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw02_Psd : 34|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw03_Psd : 35|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw04_Psd : 36|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw05_Psd : 37|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw06_Psd : 38|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw07_Psd : 39|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw08_Psd : 40|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw09_Psd : 41|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw10_Psd : 42|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw11_Psd : 43|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw12_Psd : 44|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw13_Psd : 45|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw14_Psd : 46|1@1+ (1,0) [0|0] "" NEO
 SG_ StW_Sw15_Psd : 47|1@1+ (1,0) [0|0] "" NEO
 SG_ WprSw6Posn : 48|3@1+ (1,0) [0|0] "" NEO
 SG_ MC_STW_ACTN_RQ : 52|4@1+ (1,0) [0|15] "" NEO
 SG_ CRC_STW_ACTN_RQ : 56|8@1+ (1,0) [0|0] "" NEO

BO_ 643 BODY_R1: 8 GTW
 SG_ AirTemp_Insd : 40|8@1+ (0.25,0) [0|63.5] "C" NEO
 SG_ AirTemp_Outsd : 56|8@1+ (0.5,-40) [-40|86.5] "C" NEO
 SG_ Bckl_Sw_RL_Stat_SAM_R : 54|2@1+ (1,0) [4|-1] "" NEO
 SG_ Bckl_Sw_RM_Stat_SAM_R : 50|2@1+ (1,0) [4|-1] "" NEO
 SG_ Bckl_Sw_RR_Stat_SAM_R : 52|2@1+ (1,0) [4|-1] "" NEO
 SG_ DL_RLtch_Stat : 14|2@1+ (1,0) [4|-1] "" NEO
 SG_ DrRLtch_FL_Stat : 6|2@1+ (1,0) [4|-1] "" NEO
 SG_ DrRLtch_FR_Stat : 4|2@1+ (1,0) [4|-1] "" NEO
 SG_ DrRLtch_RL_Stat : 2|2@1+ (1,0) [4|-1] "" NEO
 SG_ DrRLtch_RR_Stat : 0|2@1+ (1,0) [4|-1] "" NEO
 SG_ EngHd_Stat : 12|2@1+ (1,0) [4|-1] "" NEO
 SG_ LoBm_On_Rq : 39|1@1+ (1,0) [0|1] "" NEO
 SG_ HiBm_On : 38|1@1+ (1,0) [0|1] "" NEO
 SG_ Hrn_On : 29|1@1+ (1,0) [0|1] "" NEO
 SG_ IrLmp_D_Lt_Flt : 37|1@1+ (1,0) [0|1] "" NEO
 SG_ IrLmp_P_Rt_Flt : 36|1@1+ (1,0) [0|1] "" NEO
 SG_ LgtSens_Twlgt : 21|3@1+ (1,0) [0|7] "Steps" NEO
 SG_ LgtSens_SNA : 20|1@1+ (1,0) [0|1] "" NEO
 SG_ LgtSens_Tunnel : 19|1@1+ (1,0) [0|1] "" NEO
 SG_ LgtSens_Flt : 18|1@1+ (1,0) [0|1] "" NEO
 SG_ LgtSens_Night : 17|1@1+ (1,0) [2|-1] "" NEO
 SG_ ADL_LoBm_On_Rq : 16|1@1+ (1,0) [0|1] "" NEO
 SG_ LoBm_D_Lt_Flt : 35|1@1+ (1,0) [0|1] "" NEO
 SG_ LoBm_P_Rt_Flt : 34|1@1+ (1,0) [0|1] "" NEO
 SG_ MPkBrk_Stat : 27|1@1+ (1,0) [2|-1] "" NEO
 SG_ RevGr_Engg : 32|2@1+ (1,0) [4|-1] "" NEO
 SG_ StW_Cond_Stat : 48|2@1+ (1,0) [4|-1] "" NEO
 SG_ Term54_Actv : 28|1@1+ (1,0) [0|1] "" NEO
 SG_ Trlr_Stat : 30|2@1+ (1,0) [4|-1] "" NEO
 SG_ VTA_Alm_Actv : 10|1@1+ (1,0) [0|1] "" NEO
 SG_ WprOutsdPkPosn : 26|1@1+ (1,0) [0|1] "" NEO

BO_ 760 MCU_gpsVehicleSpeed: 8 MCU
 SG_ MCU_gpsHDOP : 0|8@1+ (0.10,0) [0|25.50] "1" NEO
 SG_ MCU_gpsVehicleHeading : 8|16@1+ (0.007810,0) [0|511.828350] "deg" NEO
 SG_ MCU_gpsVehicleSpeed : 24|16@1+ (0.003910,0) [0|256.241850] "km/hr" NEO
 SG_ MCU_mppSpeedLimit : 51|5@1+ (5,0) [0|155] "kph/mph" NEO
 SG_ MCU_speedLimitUnits : 41|1@1+ (1,0) [2|-1] "" NEO
 SG_ MCU_userSpeedOffset : 42|6@1+ (1,-30) [-30|33] "kph/mph" NEO
 SG_ MCU_userSpeedOffsetUnits : 40|1@1+ (1,0) [2|-1] "" NEO

BO_ 904 MCU_clusterBacklightRequest: 3 NEO
 SG_ MCU_clusterBacklightOn : 7|1@1+ (1,0) [0|1] "" NEO
 SG_ MCU_clusterBrightnessLevel : 8|8@1+ (0.5,0) [0|127.5] "%" NEO
 SG_ MCU_clusterReadyForDrive : 6|1@1+ (1,0) [2|-1] "" NEO
 SG_ MCU_clusterReadyForPowerOff : 5|1@1+ (1,0) [0|1] "" NEO

BO_ 984 MCU_locationStatus: 8 MCU
 SG_ MCU_gpsAccuracy : 56|7@1+ (0.200000003,0) [0|25.200000378] "m" NEO
 SG_ MCU_latitude : 0|28@1- (0.000001,0) [-134.21772759734682|134.21772659734683] "deg" NEO
 SG_ MCU_longitude : 28|28@1- (0.000001,0) [-268.43545519469365|268.43545419469365] "deg" NEO

BO_ 840 GTW_status: 8 GTW
 SG_ GTW_accGoingDown : 1|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_accRailReq : 15|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_brakePressed : 6|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_driveGoingDown : 0|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_driveRailReq : 7|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_driverIsLeaving : 2|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_driverPresent : 5|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_hvacGoingDown : 12|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_hvacRailReq : 14|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_icPowerOff : 3|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_notEnough12VForDrive : 4|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_preconditionRequest : 13|1@1+ (1,0) [0|1] "" NEO
 SG_ GTW_statusChecksum : 56|8@1+ (1,0) [0|255] "" NEO
 SG_ GTW_statusCounter : 52|4@1+ (1,0) [0|15] "" NEO

VAL_ 3 StW_Angl 16383 "SNA" ;
VAL_ 3 StW_AnglSens_Id 2 "MUST" 0 "PSBL" 1 "SELF" ;
VAL_ 3 StW_AnglSens_Stat 2 "ERR" 3 "ERR_INI" 1 "INI" 0 "OK" ;
VAL_ 3 StW_AnglSpd 16383 "SNA" ;
VAL_ 14 StW_AnglHP 16383 "SNA" ;
VAL_ 14 StW_AnglHP_Spd 16383 "SNA" ;
VAL_ 14 StW_AnglHP_Sens_Stat 3 "SNA" 2 "ERR" 1 "INI" 0 "OK" ;
VAL_ 14 StW_AnglHP_Sens_Id 3 "SNA" 2 "KOSTAL" 1 "DELPHI" 0 "TEST" ;
VAL_ 69 SpdCtrlLvr_Stat 32 "DN_1ST" 16 "UP_1ST" 8 "DN_2ND" 4 "UP_2ND" 2 "RWD" 1 "FWD" 0 "IDLE" ;
VAL_ 69 DTR_Dist_Rq 255 "SNA" 200 "ACC_DIST_7" 166 "ACC_DIST_6" 133 "ACC_DIST_5" 100 "ACC_DIST_4" 66 "ACC_DIST_3" 33 "ACC_DIST_2" 0 "ACC_DIST_1" ;
VAL_ 69 TurnIndLvr_Stat 3 "SNA" 2 "RIGHT" 1 "LEFT" 0 "IDLE" ;
VAL_ 69 HiBmLvr_Stat 3 "SNA" 2 "HIBM_FLSH_ON_PSD" 1 "HIBM_ON_PSD" 0 "IDLE" ;
VAL_ 69 WprWashSw_Psd 3 "SNA" 2 "WASH" 1 "TIPWIPE" 0 "NPSD" ;
VAL_ 69 WprWash_R_Sw_Posn_V2 3 "SNA" 2 "WASH" 1 "INTERVAL" 0 "OFF" ;
VAL_ 69 StW_Lvr_Stat 4 "STW_BACK" 3 "STW_FWD" 2 "STW_DOWN" 1 "STW_UP" 0 "NPSD" ;
VAL_ 69 StW_Cond_Psd 3 "SNA" 2 "DOWN" 1 "UP" 0 "NPSD" ;
VAL_ 69 HrnSw_Psd 3 "SNA" 2 "NDEF2" 1 "PSD" 0 "NPSD" ;
VAL_ 69 StW_Sw00_Psd 1 "PRESSED" 0 "NOT_PRESSED_SNA" ;
VAL_ 69 StW_Sw01_Psd 1 "PRESSED" 0 "NOT_PRESSED_SNA" ;
VAL_ 69 StW_Sw03_Psd 1 "PRESSED" 0 "NOT_PRESSED_SNA" ;
VAL_ 69 StW_Sw04_Psd 1 "PRESSED" 0 "NOT_PRESSED_SNA" ;
VAL_ 69 WprSw6Posn 7 "SNA" 6 "STAGE2" 5 "STAGE1" 4 "INTERVAL4" 3 "INTERVAL3" 2 "INTERVAL2" 1 "INTERVAL1" 0 "OFF" ;VAL_ 257 GTW_epasControlType 0 "WITHOUT" 1 "WITH_ANGLE" 3 "WITH_BOTH" 2 "WITH_TORQUE" ;
VAL_ 109 StW_Sw_Stat3 7 "SNA" 6 "NDEF6" 5 "NDEF5" 4 "NDEF4" 3 "PLUS_MINUS" 2 "MINUS" 1 "PLUS" 0 "NPSD" ;
VAL_ 109 MsgTxmtId 3 "NDEF3" 2 "NDEF2" 1 "SCCM" 0 "EWM" ;
VAL_ 109 TSL_RND_Posn_StW 15 "SNA" 8 "D" 6 "INI" 4 "N_DOWN" 2 "N_UP" 1 "R" 0 "IDLE" ;
VAL_ 109 TSL_P_Psd_StW 3 "SNA" 2 "INI" 1 "PSD" 0 "IDLE" ;
VAL_ 257 GTW_epasEmergencyOn 1 "EMERGENCY_POWER" 0 "NONE" ;
VAL_ 257 GTW_epasLDWEnabled 1 "ALLOWED" 0 "INHIBITED" ;
VAL_ 257 GTW_epasPowerMode 0 "DRIVE_OFF" 1 "DRIVE_ON" 3 "LOAD_SHED" 2 "SHUTTING_DOWN" 15 "SNA" ;
VAL_ 257 GTW_epasTuneRequest 1 "DM_COMFORT" 3 "DM_SPORT" 2 "DM_STANDARD" 0 "FAIL_SAFE_DEFAULT" 4 "RWD_COMFORT" 6 "RWD_SPORT" 5 "RWD_STANDARD" 7 "SNA" ;
VAL_ 264 DI_torqueDriver -4096 "SNA" ;
VAL_ 264 DI_torqueMotor -4096 "SNA" ;
VAL_ 264 DI_soptState 7 "SOPT_TEST_SNA" 4 "SOPT_TEST_NOT_RUN" 3 "SOPT_TEST_PASSED" 2 "SOPT_TEST_FAILED" 1 "SOPT_TEST_IN_PROGRESS" 0 "SOPT_PRE_TEST" ;
VAL_ 264 DI_motorRPM -32768 "SNA" ;
VAL_ 264 DI_pedalPos 255 "SNA" ;
VAL_ 280 DI_torqueEstimate -2048 "SNA" ;
VAL_ 280 DI_gear 7 "DI_GEAR_SNA" 4 "DI_GEAR_D" 3 "DI_GEAR_N" 2 "DI_GEAR_R" 1 "DI_GEAR_P" 0 "DI_GEAR_INVALID" ;
VAL_ 280 DI_brakePedal 1 "Applied" 0 "Not_applied" ;
VAL_ 280 DI_vehicleSpeed 4095 "SNA" ;
VAL_ 280 DI_gearRequest 7 "DI_GEAR_SNA" 4 "DI_GEAR_D" 3 "DI_GEAR_N" 2 "DI_GEAR_R" 1 "DI_GEAR_P" 0 "DI_GEAR_INVALID" ;
VAL_ 280 DI_torqueInterfaceFailure 1 "TORQUE_INTERFACE_FAILED" 0 "TORQUE_INTERFACE_NORMAL" ;
VAL_ 280 DI_brakePedalState 3 "SNA" 2 "INVALID" 1 "ON" 0 "OFF" ;
VAL_ 280 DI_epbParkRequest 1 "Park_requested" 0 "No_request" ;
VAL_ 280 DI_epbInterfaceReady 1 "EPB_INTERFACE_READY" 0 "EPB_INTERFACE_NOT_READY" ;
VAL_ 309 ESP_absBrakeEvent 1 "ACTIVE" 0 "NOT_ACTIVE" ;
VAL_ 309 ESP_brakeDiscWipingActive 1 "ACTIVE" 0 "INACTIVE" ;
VAL_ 309 ESP_brakeLamp 0 "OFF" 1 "ON" ;
VAL_ 309 ESP_espFaultLamp 0 "OFF" 1 "ON" ;
VAL_ 309 ESP_espLampFlash 1 "FLASH" 0 "OFF" ;
VAL_ 309 ESP_hillStartAssistActive 1 "ACTIVE" 0 "INACTIVE" 2 "NOT_AVAILABLE" 3 "SNA" ;
VAL_ 309 ESP_absFaultLamp 0 "OFF" 1 "ON" ;
VAL_ 309 ESP_espOffLamp 0 "OFF" 1 "ON" ;
VAL_ 309 ESP_stabilityControlSts 2 "ENGAGED" 3 "FAULTED" 5 "INIT" 4 "NOT_CONFIGURED" 0 "OFF" 1 "ON" ;
VAL_ 309 ESP_tcLampFlash 1 "FLASH" 0 "OFF" ;
VAL_ 760 MCU_speedLimitUnits 1 "KPH" 0 "MPH" ;
VAL_ 760 MCU_userSpeedOffsetUnits 1 "KPH" 0 "MPH" ;
VAL_ 643 AirTemp_Insd 255 "SNA" ;
VAL_ 643 AirTemp_Outsd 254 "INIT" 255 "SNA" ;
VAL_ 643 Bckl_Sw_RL_Stat_SAM_R 2 "FLT" 1 "NOT" 0 "OK" 3 "SNA" ;
VAL_ 643 Bckl_Sw_RM_Stat_SAM_R 2 "FLT" 1 "NOT" 0 "OK" 3 "SNA" ;
VAL_ 643 Bckl_Sw_RR_Stat_SAM_R 2 "FLT" 1 "NOT" 0 "OK" 3 "SNA" ;
VAL_ 643 DL_RLtch_Stat 1 "CLS" 0 "NDEF0" 2 "OPN" 3 "SNA" ;
VAL_ 643 DrRLtch_FL_Stat 1 "CLS" 0 "NDEF0" 2 "OPN" 3 "SNA" ;
VAL_ 643 DrRLtch_FR_Stat 1 "CLS" 0 "NDEF0" 2 "OPN" 3 "SNA" ;
VAL_ 643 DrRLtch_RL_Stat 1 "CLS" 0 "NDEF0" 2 "OPN" 3 "SNA" ;
VAL_ 643 DrRLtch_RR_Stat 1 "CLS" 0 "NDEF0" 2 "OPN" 3 "SNA" ;
VAL_ 643 EngHd_Stat 1 "CLS" 0 "NDEF0" 2 "OPN" 3 "SNA" ;
VAL_ 643 LgtSens_Night 0 "DAY" 1 "NIGHT" ;
VAL_ 643 MPkBrk_Stat 1 "ENGG" 0 "RELS" ;
VAL_ 643 RevGr_Engg 0 "DISENGG" 1 "ENGG" 2 "NDEF2" 3 "SNA" ;
VAL_ 643 StW_Cond_Stat 3 "BLINK" 1 "NDEF1" 0 "OFF" 2 "ON" ;
VAL_ 643 Trlr_Stat 2 "NDEF2" 0 "NONE" 1 "OK" 3 "SNA" ;
VAL_ 792 BOOT_STATE 2 "Init" 3 "SNA" 0 "closed" 1 "open" ;
VAL_ 792 CERRD 1 "CAN error detect" 0 "no Can error detected" ;
VAL_ 792 DAY 1 "Init" 0 "SNA" ;
VAL_ 792 DOOR_STATE_FL 2 "Init" 3 "SNA" 0 "closed" 1 "open" ;
VAL_ 792 DOOR_STATE_FR 2 "Init" 3 "SNA" 0 "closed" 1 "open" ;
VAL_ 792 DOOR_STATE_FrontTrunk 2 "Init" 3 "SNA" 0 "closed" 1 "open" ;
VAL_ 792 DOOR_STATE_RL 2 "Init" 3 "SNA" 0 "closed" 1 "open" ;
VAL_ 792 DOOR_STATE_RR 2 "Init" 3 "SNA" 0 "closed" 1 "open" ;
VAL_ 792 GTW_updateInProgress 1 "IN_PROGRESS" 2 "IN_PROGRESS_NOT_USED" 3 "IN_PROGRESS_SNA" 0 "NOT_IN_PROGRESS" ;
VAL_ 792 Hour 30 "Init" 31 "SNA" ;
VAL_ 792 MCU_factoryMode 1 "FACTORY_MODE" 0 "NORMAL_MODE" ;
VAL_ 792 MCU_transportModeOn 0 "NORMAL_MODE" ;
VAL_ 792 MINUTE 62 "Init" 63 "SNA" ;
VAL_ 792 MONTH 1 "Init" 15 "SNA" ;
VAL_ 792 SECOND 62 "Init" 63 "SNA" ;
VAL_ 792 YEAR 126 "Init" 127 "SNA" ;
VAL_ 872 DI_aebState 2 "ENABLED" 4 "FAULT" 7 "SNA" 1 "STANDBY" 3 "STANDSTILL" 0 "UNAVAILABLE" ;
VAL_ 872 DI_analogSpeed 4095 "SNA" ;
VAL_ 872 DI_cruiseState 2 "ENABLED" 5 "FAULT" 0 "OFF" 4 "OVERRIDE" 7 "PRE_CANCEL" 6 "PRE_FAULT" 1 "STANDBY" 3 "STANDSTILL" ;
VAL_ 872 DI_digitalSpeed 255 "SNA" ;
VAL_ 872 DI_immobilizerState 2 "AUTHENTICATING" 3 "DISARMED" 6 "FAULT" 4 "IDLE" 0 "INIT_SNA" 1 "REQUEST" 5 "RESET" ;
VAL_ 872 DI_speedUnits 1 "KPH" 0 "MPH" ;
VAL_ 872 DI_state 3 "ABORT" 4 "ENABLE" 2 "FAULT" 1 "STANDBY" 0 "UNAVAILABLE" ;
VAL_ 872 DI_systemState 3 "ABORT" 4 "ENABLE" 2 "FAULT" 1 "STANDBY" 0 "UNAVAILABLE" ;
VAL_ 872 DI_vehicleHoldState 2 "BLEND_IN" 4 "BLEND_OUT" 6 "FAULT" 7 "INIT" 5 "PARK" 1 "STANDBY" 3 "STANDSTILL" 0 "UNAVAILABLE" ;
VAL_ 880 EPAS_currentTuneMode 1 "DM_COMFORT" 3 "DM_SPORT" 2 "DM_STANDARD" 0 "FAIL_SAFE_DEFAULT" 4 "RWD_COMFORT" 6 "RWD_SPORT" 5 "RWD_STANDARD" 7 "UNAVAILABLE" ;
VAL_ 880 EPAS_eacErrorCode 14 "EAC_ERROR_EPB_INHIBIT" 3 "EAC_ERROR_HANDS_ON" 7 "EAC_ERROR_HIGH_ANGLE_RATE_REQ" 9 "EAC_ERROR_HIGH_ANGLE_RATE_SAFETY" 6 "EAC_ERROR_HIGH_ANGLE_REQ" 8 "EAC_ERROR_HIGH_ANGLE_SAFETY" 10 "EAC_ERROR_HIGH_MMOT_SAFETY" 11 "EAC_ERROR_HIGH_TORSION_SAFETY" 0 "EAC_ERROR_IDLE" 12 "EAC_ERROR_LOW_ASSIST" 2 "EAC_ERROR_MAX_SPEED" 1 "EAC_ERROR_MIN_SPEED" 13 "EAC_ERROR_PINION_VEL_DIFF" 4 "EAC_ERROR_TMP_FAULT" 5 "EAR_ERROR_MAX_STEER_DELTA" 15 "SNA" ;
VAL_ 880 EPAS_eacStatus 2 "EAC_ACTIVE" 1 "EAC_AVAILABLE" 3 "EAC_FAULT" 0 "EAC_INHIBITED" 4 "SNA" ;
VAL_ 880 EPAS_handsOnLevel 0 "0" 1 "1" 2 "2" 3 "3" ;
VAL_ 880 EPAS_steeringFault 1 "FAULT" 0 "NO_FAULT" ;
VAL_ 880 EPAS_steeringRackForce 1022 "NOT_IN_SPEC" 1023 "SNA" ;
VAL_ 880 EPAS_steeringReduced 0 "NORMAL_ASSIST" 1 "REDUCED_ASSIST" ;
VAL_ 880 EPAS_torsionBarTorque 0 "SEE_SPECIFICATION" 4095 "SNA" 4094 "UNDEFINABLE_DATA" ;
VAL_ 904 MCU_clusterReadyForDrive 0 "NO_SNA" 1 "YES" ;
VAL_ 1160 DAS_steeringAngleRequest 16384 "ZERO_ANGLE" ;
VAL_ 1160 DAS_steeringControlType 1 "ANGLE_CONTROL" 3 "DISABLED" 0 "NONE" 2 "RESERVED" ;
VAL_ 1160 DAS_steeringHapticRequest 1 "ACTIVE" 0 "IDLE" ;
`;
