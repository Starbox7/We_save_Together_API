import Event from '../model/Event.js';

const eventService = {
  getEvents: async () => {
    const events = await Event.get();
    return events;
  },
  updateEventStatus: async (userId, campaignName) => {
    await Event.updateStatus(userId, campaignName);
  },
};

export default eventService;
