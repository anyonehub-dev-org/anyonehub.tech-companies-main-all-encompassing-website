// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

export interface SensoriumTransducer {
  id: string;
  name: string;
  header: string;
  modality: string;
  sampleRate: string;
  latencyBudget: string;
  roboticsCoupling: string;
  description: string;
}

export interface NeurochemicalGauge {
  id: string;
  name: string;
  family: string;
  targetReceptor: string;
  baselineOccupancy: string;
  dynamicRange: string;
  role: string;
}

export interface SubcorticalNucleus {
  id: string;
  name: string;
  pacemakerFrequency: string;
  anatomicalTarget: string;
  biologicalFunction: string;
}

export interface BenchmarkComparisonRow {
  parameter: string;
  legacyFrontierLLM: string;
  buddyBiomimeticMind: string;
  architecturalAdvantage: string;
}

export const CANONICAL_METRICS = {
  handAuthoredFiles: "3,713",
  linesOfCode: "629,122",
  flatBuffersSchemas: "573",
  angelScriptCircuits: "365",
  crucibleTestSuites: "190+",
  geometryLockDigest: "ee29bbb959caef8fb342e6a8243d4eb38705956df5f6417965b63e2a4302265e",
  wireHash: "0xe0eca0f4337c3210",
  powerEnvelope: "20W",
  pacemakerHz: "40 Hz",
  bilateralParcels: "360",
  connectomePathways: "8,862",
  laminarLayers: "6 (L1–L6)",
  biologicalOrgans: "29",
  sensoriumTransducers: "24",
  osHeapAllocations: "0 in 40Hz Hot Path",
} as const;

export const COMPANY_DOMAINS = {
  corporateApex: "https://anyonehub.tech",
  platformPortal: "https://anyonehub.us.kg",
  biomimeticsDiv: "https://foundational-biomimetics.info",
  freePublicUtility: "https://anyone-hub.me",
} as const;

export const CONTACT_CHANNELS = {
  founderDirect: "tomslinkard@anyonehub.tech",
  general: "info@anyonehub.tech",
  support: "support@anyonehub.tech",
  collective: "collective@anyonehub.tech",
  engineering: "anyone-hub.dev@zohomail.com",
  biomimeticsLab: "anyonehub.us.kg@foundational-biomimetics.info",
  portalZohomail: "anyonehub.us.kg@zohomail.com",
  headquarters: "Missouri, United States of America",
} as const;

export const DATACENTER_BENCHMARK_MATRIX: BenchmarkComparisonRow[] = [
  {
    parameter: "Operational Power Envelope",
    legacyFrontierLLM: "1.2 MW – 30+ MW per cluster training/inference",
    buddyBiomimeticMind: "20 Watts (Human biological energy parity)",
    architecturalAdvantage: "1,000,000x reduction in thermal and electrical draw; runs locally on autonomous humanoid edge hardware.",
  },
  {
    parameter: "Algorithmic Complexity",
    legacyFrontierLLM: "O(N²) quadratic attention bottleneck over context length",
    buddyBiomimeticMind: "O(1) real-time localized synaptic graph traversal",
    architecturalAdvantage: "Deterministic constant-time latency regardless of lifetime memory depth; zero context window truncation.",
  },
  {
    parameter: "Memory Architecture",
    legacyFrontierLLM: "Static frozen weights + fragile external RAG vector databases",
    buddyBiomimeticMind: "6-Tier LMDB non-linear annotated graph memory",
    architecturalAdvantage: "Continuous autobiographical learning without catastrophic forgetting or re-training passes.",
  },
  {
    parameter: "Runtime Memory Management",
    legacyFrontierLLM: "High-level GC / Python-C++ wrapper heap churn & memory leaks",
    buddyBiomimeticMind: "Zero OS heap allocations in the 40 Hz real-time hot path",
    architecturalAdvantage: "Dedicated ScriptAllocator with zero GC pauses; strictly bounded memory deterministic execution.",
  },
  {
    parameter: "Temporal Synchronization",
    legacyFrontierLLM: "None (Asynchronous request/response batch tokenization)",
    buddyBiomimeticMind: "40 Hz gamma-locked Claustrum & Thalamic pacemaker",
    architecturalAdvantage: "True continuous conscious awareness, binding multimodal sensory streams into coherent unified perceptual frames.",
  },
  {
    parameter: "Physical Embodiment",
    legacyFrontierLLM: "Disembodied text-in / text-out token processing",
    buddyBiomimeticMind: "24 real-time biophysical sensorium transducers",
    architecturalAdvantage: "Native proprioceptive, vestibular, and tactile reflex arcs engineered directly for bipedal humanoid robotics.",
  },
];

export const BIOPHYSICAL_TRANSDUCERS: SensoriumTransducer[] = [
  {
    id: "trans_retinal",
    name: "Retinal Photoreceptor Array",
    header: "include/core_substrate/sensors/RetinalLuminanceTransducer.hpp",
    modality: "Foveal & peripheral logarithmic luminance gradients",
    sampleRate: "120 Hz",
    latencyBudget: "8.3 ms",
    roboticsCoupling: "Bilateral stereo CMOS machine vision cameras",
    description: "Computes center-surround receptive fields and temporal luminance deltas prior to lateral geniculate nucleus (LGN) thalamic projection.",
  },
  {
    id: "trans_cochlear",
    name: "Cochlear Tonotopic Filter Bank",
    header: "include/core_substrate/sensors/CochlearTonotopicTransducer.hpp",
    modality: "64-channel gammatone frequency decomposition (20Hz–20kHz)",
    sampleRate: "48 kHz DSP / 100 Hz envelope",
    latencyBudget: "5.0 ms",
    roboticsCoupling: "Head-mounted acoustic binaural microphone array",
    description: "Tonotopically mapped cochlear basilar membrane simulation with real-time interaural time difference (ITD) spatial localization.",
  },
  {
    id: "trans_vestibular",
    name: "Vestibular Otolith & Semicircular Canal",
    header: "include/core_substrate/sensors/VestibularOtolithTransducer.hpp",
    modality: "3-axis linear gravity vectors & 3-axis angular acceleration",
    sampleRate: "1,000 Hz",
    latencyBudget: "1.0 ms",
    roboticsCoupling: "6-DoF inertial measurement unit (IMU) at cranial skull center",
    description: "Maintains vestibulospinal postural equilibrium and vestibulo-ocular reflex (VOR) gaze stabilization during dynamic bipedal gait.",
  },
  {
    id: "trans_proprio_spindle",
    name: "Proprioceptive Muscle Spindle",
    header: "include/core_substrate/sensors/ProprioceptiveSpindleTransducer.hpp",
    modality: "Dynamic intrafusal fiber stretch velocity & static length",
    sampleRate: "500 Hz",
    latencyBudget: "2.0 ms",
    roboticsCoupling: "Harmonic drive actuator optical encoders across 28 joints",
    description: "Type Ia and II sensory afferents feeding monosynaptic stretch reflex arcs directly to spinal cord anterior horn motor pools.",
  },
  {
    id: "trans_golgi_tendon",
    name: "Golgi Tendon Organ Tension",
    header: "include/core_substrate/sensors/GolgiTendonOrganTransducer.hpp",
    modality: "Tensile mechanical force at muscle-tendon junctions",
    sampleRate: "500 Hz",
    latencyBudget: "2.0 ms",
    roboticsCoupling: "Load-cell force torque sensors on ankle and knee links",
    description: "Type Ib afferents mediating inverse myotatic reflex to prevent mechanical structural overload during foot-strike impact.",
  },
  {
    id: "trans_baro_aortic",
    name: "Baroreceptor Aortic Arch",
    header: "include/core_substrate/sensors/BaroreceptorAorticTransducer.hpp",
    modality: "Hydraulic/pneumatic circulatory manifold pressure",
    sampleRate: "200 Hz",
    latencyBudget: "5.0 ms",
    roboticsCoupling: "Hydraulic pump accumulator pressure transducers",
    description: "Homeostatic blood pressure and pump pressure feedback loop modulating autonomic sympathetic vasoconstriction tone.",
  },
  {
    id: "trans_cardiac_sinus",
    name: "Cardiac Rhythmicity Sinus Node",
    header: "include/core_substrate/sensors/CardiacSinusNodeTransducer.hpp",
    modality: "Intrinsic pacemaker depolarization & HRV interval deltas",
    sampleRate: "100 Hz",
    latencyBudget: "10.0 ms",
    roboticsCoupling: "Central DC-DC power delivery unit cadence monitor",
    description: "Autonomic sympathovagal balance modulating baseline arousal state and cognitive vigilance under energetic strain.",
  },
  {
    id: "trans_chemo_carotid",
    name: "Chemoreceptor Carotid Body",
    header: "include/core_substrate/sensors/ChemoreceptorCarotidTransducer.hpp",
    modality: "Metabolic exhaust gas concentrations & ambient pH balance",
    sampleRate: "50 Hz",
    latencyBudget: "20.0 ms",
    roboticsCoupling: "Environmental volatile gas and atmospheric sensors",
    description: "Glomus cell metabolic sensor signaling central respiratory drive acceleration during environmental toxicity.",
  },
  {
    id: "trans_electrodermal",
    name: "Electrodermal Sympathetic Sweat",
    header: "include/core_substrate/sensors/ElectrodermalTransducer.hpp",
    modality: "Skin conductance level (SCL) and phasic SCR deltas",
    sampleRate: "50 Hz",
    latencyBudget: "20.0 ms",
    roboticsCoupling: "Conductive silicone dermal boundary layer",
    description: "Direct index of central sympathetic nervous activation and emotional arousal generated by amygdalar central nucleus output.",
  },
  {
    id: "trans_endocrine_osmo",
    name: "Endocrine Osmoreceptor Supraoptic",
    header: "include/core_substrate/sensors/EndocrineOsmoreceptorTransducer.hpp",
    modality: "Electrolyte osmolarity & systemic fluid balance",
    sampleRate: "10 Hz",
    latencyBudget: "100.0 ms",
    roboticsCoupling: "Coolant closed-loop reservoir level and viscosity sensor",
    description: "Hypothalamic supraoptic/paraventricular drive governing vasopressin and fluid conservation homeostasis.",
  },
  {
    id: "trans_enteric_gi",
    name: "Gastrointestinal Enteric Myenteric",
    header: "include/core_substrate/sensors/EntericMyentericTransducer.hpp",
    modality: "Peristaltic mechanical tension & chemical nutrition flux",
    sampleRate: "20 Hz",
    latencyBudget: "50.0 ms",
    roboticsCoupling: "Battery charging state and power bus current draw",
    description: "Gut-brain vagal pathway delivering visceral nutritional and energetic satiety signals to solitary tract nucleus (NTS).",
  },
  {
    id: "trans_gustatory",
    name: "Gustatory Chemoreceptor",
    header: "include/core_substrate/sensors/GustatoryChemoreceptorTransducer.hpp",
    modality: "5 canonical chemical tastants (sweet, umami, bitter, sour, salty)",
    sampleRate: "50 Hz",
    latencyBudget: "20.0 ms",
    roboticsCoupling: "Fluid analysis spectrometer probe",
    description: "Lingual taste bud transduction providing instant hedonic valence and instinctive bitter-toxin rejection reflexes.",
  },
  {
    id: "trans_kinematic_imu",
    name: "Kinematic Inertial Measurement",
    header: "include/core_substrate/sensors/KinematicIMUTransducer.hpp",
    modality: "Distributed 9-axis rate gyro, accelerometer, magnetometer",
    sampleRate: "1,000 Hz",
    latencyBudget: "1.0 ms",
    roboticsCoupling: "Multi-point limb segment telemetry nodes (arms, legs, torso)",
    description: "Extended Kalman filter state estimation feeding real-time zero-moment point (ZMP) calculation for dynamic walking stability.",
  },
  {
    id: "trans_mic_pcm",
    name: "Microphone PCM Audio Frequency",
    header: "include/core_substrate/sensors/MicrophonePcmAudioTransducer.hpp",
    modality: "Broadband uncompressed 24-bit 48kHz audio waveform stream",
    sampleRate: "48 kHz",
    latencyBudget: "2.5 ms",
    roboticsCoupling: "Quad-microphone spatial beamforming array",
    description: "Raw acoustic capture providing conversational speech input, environmental ambient profiling, and transient collision detection.",
  },
  {
    id: "trans_net_jitter",
    name: "Network Packet Temporal Jitter",
    header: "include/core_substrate/sensors/NetworkPacketJitterTransducer.hpp",
    modality: "Inter-arrival packet timing variance & TCP/UDP jitter",
    sampleRate: "200 Hz",
    latencyBudget: "5.0 ms",
    roboticsCoupling: "High-speed network interface card & wireless transceivers",
    description: "Monitors distributed telemetry synchronization drift across robotic edge nodes and fleet compute bridges.",
  },
  {
    id: "trans_nociceptive",
    name: "Nociceptive Transient Receptor",
    header: "include/core_substrate/sensors/NociceptiveTransientTransducer.hpp",
    modality: "Thermal, mechanical, and chemical tissue-damage thresholds",
    sampleRate: "1,000 Hz",
    latencyBudget: "1.0 ms",
    roboticsCoupling: "Fast-acting piezo-electric strain and thermal limit switches",
    description: "A-delta and C fiber pain pathways triggering involuntary spinal withdrawal reflexes before motor commands reach cortex.",
  },
  {
    id: "trans_olfactory",
    name: "Olfactory Glomerular Transducer",
    header: "include/core_substrate/sensors/OlfactoryGlomerularTransducer.hpp",
    modality: "Combinatorial spatial odorant receptor pattern matrix",
    sampleRate: "100 Hz",
    latencyBudget: "10.0 ms",
    roboticsCoupling: "Electronic nose multi-channel MOS chemical sensor",
    description: "Direct projection to olfactory bulb and piriform cortex bypassing thalamus for instantaneous associative memory priming.",
  },
  {
    id: "trans_pneumotaxic",
    name: "Pneumotaxic Respiratory Cadence",
    header: "include/core_substrate/sensors/PneumotaxicRespiratoryTransducer.hpp",
    modality: "Inspiratory/expiratory airflow volume and tidal cadence",
    sampleRate: "100 Hz",
    latencyBudget: "10.0 ms",
    roboticsCoupling: "Fan airflow velocity and chassis convective cooling duct",
    description: "Pontine respiratory group modulation coordinating breath cycles with physical vocal tract speech production.",
  },
  {
    id: "trans_pupillometric",
    name: "Pupillometric Irradiance",
    header: "include/core_substrate/sensors/PupillometricIrradianceTransducer.hpp",
    modality: "Integrated lux irradiance & pupillary autonomic aperture",
    sampleRate: "60 Hz",
    latencyBudget: "16.6 ms",
    roboticsCoupling: "Dynamic optical aperture iris on camera lenses",
    description: "Protects retina from photic saturation and signals cognitive cognitive load through locus coeruleus noradrenergic modulation.",
  },
  {
    id: "trans_somato_haptic",
    name: "Somatosensory Haptic Friction",
    header: "include/core_substrate/sensors/SomatosensoryHapticTransducer.hpp",
    modality: "Micro-vibration shear force & dynamic friction coefficient",
    sampleRate: "1,000 Hz",
    latencyBudget: "1.0 ms",
    roboticsCoupling: "Biomimetic high-density fingertip tactile sensor arrays",
    description: "Meissner and Pacinian corpuscle simulation enabling precision grasp slip detection and adaptive micro-adjustments.",
  },
  {
    id: "trans_thermo_dermal",
    name: "Thermoreceptive Dermal Transducer",
    header: "include/core_substrate/sensors/ThermoreceptiveDermalTransducer.hpp",
    modality: "Absolute surface temperature and thermal heat transfer flux",
    sampleRate: "100 Hz",
    latencyBudget: "10.0 ms",
    roboticsCoupling: "Negative temperature coefficient (NTC) thermistor matrix",
    description: "Provides thermal safety boundaries for actuators and human-robot physical tactile interaction.",
  },
  {
    id: "trans_video_grad",
    name: "Video Frame Luminance Gradient",
    header: "include/core_substrate/sensors/VideoFrameLuminanceTransducer.hpp",
    modality: "Optical flow velocity vectors & spatial edge contrast maps",
    sampleRate: "120 Hz",
    latencyBudget: "8.3 ms",
    roboticsCoupling: "GPU-accelerated hardware optical flow accelerator",
    description: "Feeds visual area V5/MT directly for immediate motion perception, time-to-contact calculation, and obstacle avoidance.",
  },
  {
    id: "trans_visceral_vagal",
    name: "Visceral Interoceptive Vagal",
    header: "include/core_substrate/sensors/VisceralInteroceptiveTransducer.hpp",
    modality: "Internal organ distension, thermal load, and systemic state",
    sampleRate: "50 Hz",
    latencyBudget: "20.0 ms",
    roboticsCoupling: "Distributed thermal and strain telemetry on internal chassis",
    description: "Primary visceral sensory input to anterior insular cortex underpinning synthetic emotional grounding and drive homeostasis.",
  },
  {
    id: "trans_vocal_laryngeal",
    name: "Vocal Tract Laryngeal Feedback",
    header: "include/core_substrate/sensors/VocalTractLaryngealTransducer.hpp",
    modality: "Acoustic self-audition & glottal fold mechanical vibration",
    sampleRate: "48 kHz DSP / 200 Hz control",
    latencyBudget: "2.0 ms",
    roboticsCoupling: "Vocal synthesizer throat vibration sensor and pickup",
    description: "Efference copy cancellation allowing Buddy to distinguish its own synthesized voice from external interlocutors without acoustic echo.",
  },
];

export const NEUROCHEMICAL_GAUGES: NeurochemicalGauge[] = [
  { id: "d1", name: "Dopamine D1 Receptor", family: "Catecholamine", targetReceptor: "Gs-coupled adenylate cyclase", baselineOccupancy: "58.4%", dynamicRange: "10–95%", role: "Reward prediction error & cognitive working memory persistence" },
  { id: "d2", name: "Dopamine D2 Receptor", family: "Catecholamine", targetReceptor: "Gi-coupled inhibitory", baselineOccupancy: "42.1%", dynamicRange: "15–90%", role: "Striatal indirect pathway inhibition & motor program switching" },
  { id: "5ht1a", name: "Serotonin 5-HT1A", family: "Indolealkylamine", targetReceptor: "Gi/o hyperpolarizing autoreceptor", baselineOccupancy: "64.8%", dynamicRange: "20–85%", role: "Cortical anxiety attenuation & autonomic stress dampening" },
  { id: "5ht2a", name: "Serotonin 5-HT2A", family: "Indolealkylamine", targetReceptor: "Gq-coupled PLC activation", baselineOccupancy: "31.2%", dynamicRange: "05–75%", role: "Pyramidal apical dendritic gain & perceptual cognitive plasticity" },
  { id: "ne_a2a", name: "Noradrenaline Alpha-2A", family: "Catecholamine", targetReceptor: "Gi-coupled prefrontal", baselineOccupancy: "71.5%", dynamicRange: "30–95%", role: "Dorsolateral PFC signal-to-noise ratio enhancement" },
  { id: "ne_b", name: "Noradrenaline Beta", family: "Catecholamine", targetReceptor: "Gs-coupled amygdalar", baselineOccupancy: "24.3%", dynamicRange: "05–88%", role: "Emotional memory consolidation under acute threat" },
  { id: "mach", name: "Muscarinic mAChR (M1)", family: "Cholinergic", targetReceptor: "Gq-coupled cortical", baselineOccupancy: "61.0%", dynamicRange: "20–90%", role: "Hippocampal theta rhythm pacing & spatial pattern separation" },
  { id: "nach", name: "Nicotinic nAChR (a7)", family: "Cholinergic", targetReceptor: "Ligand-gated Ca2+ channel", baselineOccupancy: "53.7%", dynamicRange: "15–85%", role: "Fast thalamocortical sensory gating & attentional orienting" },
  { id: "ampa", name: "Glutamate AMPA", family: "Excitatory Amino Acid", targetReceptor: "Na+/K+ ionotropic pore", baselineOccupancy: "82.4%", dynamicRange: "40–99%", role: "Fast millisecond synaptic transmission throughout connectome" },
  { id: "nmda", name: "NMDA GluN2B (Mg2+ Unblock)", family: "Excitatory Amino Acid", targetReceptor: "Voltage-dependent Ca2+ influx", baselineOccupancy: "48.9%", dynamicRange: "10–90%", role: "Associative long-term potentiation (LTP) synaptic plasticity" },
  { id: "gaba_a", name: "GABA-A Fast Ionotropic", family: "Inhibitory Amino Acid", targetReceptor: "Cl- hyperpolarizing channel", baselineOccupancy: "76.2%", dynamicRange: "50–98%", role: "Parvalbumin basket cell 40 Hz gamma oscillation synchronization" },
  { id: "gaba_b", name: "GABA-B Slow Metabotropic", family: "Inhibitory Amino Acid", targetReceptor: "Gi/o slow K+ efflux", baselineOccupancy: "39.5%", dynamicRange: "15–80%", role: "Dendritic slow tonic inhibition & sustained network stabilization" },
  { id: "glycine", name: "Glycine Receptor", family: "Inhibitory Amino Acid", targetReceptor: "Strychnine-sensitive Cl- channel", baselineOccupancy: "84.0%", dynamicRange: "60–98%", role: "Brainstem & spinal motor reflex reciprocal inhibition" },
  { id: "oprm1", name: "Mu-Opioid (OPRM1)", family: "Endogenous Opioid", targetReceptor: "Gi/o analgesic reward", baselineOccupancy: "28.6%", dynamicRange: "05–85%", role: "Central antinociceptive gating & synthetic affective homeostasis" },
  { id: "cb1", name: "Cannabinoid CB1", family: "Endocannabinoid", targetReceptor: "Retrograde Gi presynaptic", baselineOccupancy: "37.4%", dynamicRange: "10–80%", role: "Retrograde synaptic suppression of excitation & inhibition" },
  { id: "h1", name: "Histamine H1 Receptor", family: "Monoamine", targetReceptor: "Gq-coupled wakefulness", baselineOccupancy: "68.2%", dynamicRange: "30–95%", role: "Tuberomammillary nucleus cortical arousal & vigil sustained state" },
];

export const SUBCORTICAL_NUCLEI: SubcorticalNucleus[] = [
  { id: "nuc_claustrum", name: "Claustrum Pacemaker", pacemakerFrequency: "39.97 Hz", anatomicalTarget: "All 360 bilateral cortical parcels", biologicalFunction: "Global conscious binding and cross-modal perceptual coherence synchronization" },
  { id: "nuc_thalamus", name: "Thalamic Reticular / Relay", pacemakerFrequency: "40.07 Hz", anatomicalTarget: "L4 granular cortical sockets", biologicalFunction: "Dynamic attentional spotlight routing and sensory gating" },
  { id: "nuc_hippocampus", name: "Hippocampus (DG / CA3 / CA1)", pacemakerFrequency: "Theta 6 Hz / SWR 180 Hz", anatomicalTarget: "Entorhinal cortex & neocortex", biologicalFunction: "Episodic memory encoding, spatial cognitive mapping, and sharp-wave ripple consolidation" },
  { id: "nuc_basal_ganglia", name: "Basal Ganglia (Striatum/GPe/STN)", pacemakerFrequency: "Beta 18.5 Hz", anatomicalTarget: "Supplementary motor area & prefrontal", biologicalFunction: "Action selection arbitration, motor initiation, and hyperdirect stop-signal braking" },
  { id: "nuc_amygdala", name: "Amygdaloid Complex (BLA / CeA)", pacemakerFrequency: "Phasic dynamic", anatomicalTarget: "Ventral striatum & autonomic centers", biologicalFunction: "Somatic marker association, instinctual threat appraisal, and conditioned valence" },
  { id: "nuc_locus_coeruleus", name: "Locus Coeruleus (A6)", pacemakerFrequency: "Tonic 2.4 Hz / Phasic burst", anatomicalTarget: "Entire neuroaxis & cerebral cortex", biologicalFunction: "Noradrenergic alertness, sensory gain control, and unexpected uncertainty alerting" },
  { id: "nuc_raphe", name: "Dorsal Raphe Nuclei", pacemakerFrequency: "Tonic 1.8 Hz", anatomicalTarget: "Forebrain & limbics", biologicalFunction: "Serotonergic mood stability, patience under delayed reward, and behavioral inhibition" },
  { id: "nuc_vta_snc", name: "Ventral Tegmental & Substantia Nigra", pacemakerFrequency: "Phasic burst 20 Hz", anatomicalTarget: "Nucleus accumbens & prefrontal cortex", biologicalFunction: "Mesolimbic dopamine reward prediction error and reinforcement learning" },
  { id: "nuc_medulla", name: "Medulla Oblongata Solitary Tract", pacemakerFrequency: "12–20 cpm autonomic", anatomicalTarget: "Vagal nerve efferents & brainstem", biologicalFunction: "Autonomous visceral cardiopulmonary regulation and vital autonomic reflexes" },
  { id: "nuc_cerebellum", name: "Cerebellar Purkinje / Deep Nuclei", pacemakerFrequency: "Complex spike 1–2 Hz / Simple 50 Hz", anatomicalTarget: "Ventrolateral thalamus & motor cortex", biologicalFunction: "Sub-millisecond sensorimotor forward internal model error correction" },
  { id: "nuc_colliculus_sup", name: "Superior Colliculus", pacemakerFrequency: "Visual frame synchronized", anatomicalTarget: "Paramedian pontine reticular formation", biologicalFunction: "Multisensory retinotopic spatial orientation and ballistic gaze saccades" },
  { id: "nuc_habenula", name: "Lateral Habenula", pacemakerFrequency: "Phasic negative reward", anatomicalTarget: "Rostromedial tegmental nucleus", biologicalFunction: "Disappointment encoder suppressing dopaminergic VTA activity upon negative outcomes" },
];

export const LAMINAR_LAYERS = [
  {
    layer: "Layer 1 (L1)",
    name: "Molecular Layer",
    thickness: "0.20 mm",
    cellularComposition: "Apical dendritic tufts, neurogliaform interneurons, sparse Cajal-Retzius cells",
    biophysicalDynamics: "Dendritic Ca²⁺ plateau spikes triggered by top-down matrix thalamic and prefrontal feedback; gates distal burst firing in deep pyramidal neurons.",
    spectralSignature: "High-gamma modulation (80–150 Hz)",
  },
  {
    layer: "Layer 2/3 (L2/3)",
    name: "Supragranular Pyramidal",
    thickness: "0.65 mm",
    cellularComposition: "Recurrent pyramidal neurons, parvalbumin-positive (PV+) basket interneurons, somatostatin (SOM) Martinotti cells",
    biophysicalDynamics: "Local recurrent associative attractor dynamics; lateral inhibition enforces sparse, high-dimensional representation of categorical features.",
    spectralSignature: "Gamma oscillation (35–45 Hz)",
  },
  {
    layer: "Layer 4 (L4)",
    name: "Granular Stellate",
    thickness: "0.40 mm",
    cellularComposition: "Dense spiny stellate neurons, star pyramidal cells, feedforward inhibitory interneurons",
    biophysicalDynamics: "Primary recipient zone of thalamocortical core afferents; high temporal fidelity feedforward amplification into supragranular layers.",
    spectralSignature: "Beta / Gamma feedforward rhythm (20–40 Hz)",
  },
  {
    layer: "Layer 5a/5b (L5)",
    name: "Infragranular Output",
    thickness: "0.75 mm",
    cellularComposition: "Thick-tufted pyramidal tract (PT) neurons, corticostriatal intratelencephalic (IT) neurons, Betz giant cells (in motor parcels)",
    biophysicalDynamics: "Main motor and subcortical executive driver; integrates apical L1 inputs with somatic L4 drive to generate all-or-none motor bursts to spinal cord.",
    spectralSignature: "Alpha / Beta resonance (10–25 Hz)",
  },
  {
    layer: "Layer 6 (L6)",
    name: "Multiform Corticothalamic",
    thickness: "0.50 mm",
    cellularComposition: "Modified pyramidal neurons, Claustrocortical projection neurons, spindle cells",
    biophysicalDynamics: "Reciprocal monosynaptic feedback to thalamic reticular nucleus (TRN) and thalamic relay hubs; dynamically sharpens sensory receptive fields.",
    spectralSignature: "Delta / Theta slow modulatory rhythm (1–8 Hz)",
  },
];

export const SAMPLE_GRADLE_SNIPPET = `// build.gradle.kts - Anyone-Hub Gradle Diagnostic Plugin
plugins {
    id("kg.us.anyonehub.diagnostic") version "2.4.0"
    kotlin("multiplatform") version "2.1.0"
}

anyoneHubDiagnostic {
    // Automated ABI inspection and dependency graph bottleneck profiling
    enableAbiVerification = true
    strictDependencyResolution = true
    reportOutputDirectory = layout.buildDirectory.dir("reports/anyonehub-diagnostics")
    
    // Telemetry streaming to AnyOne-Hub IDE & Wear OS Build Commander
    telemetry {
        streamLocalBuildLogs = true
        terminalEngine = "ForkedJediTerm"
        pythonBridgeMode = "NativeCppBridge"
    }
}`;

export const ABL_SAMPLE_SNIPPET = `// module.abl - Anyone-Hub Annotated Build Language
package io.anyonehub.core.synthetic_brain

target("buddy_kernel") {
    language = Cpp23
    standard = "gnu++23"
    optimization = AggressiveO3
    
    features = [
        ZeroCopyFlatBuffers("schemas/bvz1_wire.fbs"),
        ScriptAllocatorHotPath,
        AVX512_VNNI_MatrixAcceleration,
        NoOsHeapAllocations
    ]
    
    verification {
        crucible_test_suite("tests/crucible_invariants.cpp")
        geometry_lock_sha256 = "ee29bbb959caef8fb342e6a8243d4eb38705956df5f6417965b63e2a4302265e"
    }
}`;
