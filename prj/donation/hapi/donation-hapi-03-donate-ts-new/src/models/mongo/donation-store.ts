import { DonationMongoose } from "./donation.js";
import { Donation } from "../../types/donation-types.js";

export const donationStore = {
  async find() {
    const donations = await DonationMongoose.find().populate("donor").populate("candidate").lean();
    donations.forEach((donation) => {
      // @ts-ignore
      donation.donor = `${donation.donor.firstName} ${donation.donor.lastName}`;
    });
    return donations;
  },

  async findBy(id: string) {
    const donations = await DonationMongoose.find({ candidate: id });
    return donations;
  },

  async add(donation: Donation) {
    let newDonation = new DonationMongoose({ ...donation });
    await newDonation.save();
    // @ts-ignore
    newDonation = await DonationMongoose.findOne({ _id: newDonation._id }).populate("candidate").lean();
    // @ts-ignore
    return newDonation;
  },

  async delete() {
    await DonationMongoose.deleteMany({});
  },
};
