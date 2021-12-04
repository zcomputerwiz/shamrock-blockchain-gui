export const service_wallet = 'shamrock_wallet';
export const service_full_node = 'shamrock_full_node';
export const service_farmer = 'shamrock_farmer';
export const service_harvester = 'shamrock_harvester';
export const service_simulator = 'shamrock_full_node_simulator';
export const service_daemon = 'daemon';
export const service_plotter = 'chia_plotter';

// Corresponds with outbound_message.py NodeTypes
export const service_connection_types = {
  1: 'Full Node',
  2: 'Harvester',
  3: 'Farmer',
  4: 'Timelord',
  5: 'Introducer',
  6: 'Wallet',
  7: 'Plotter',
};
