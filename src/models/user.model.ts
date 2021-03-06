import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  house_name: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  pin_code: { type: String, required: true },
});

export const UserModel = mongoose.model('User', UserSchema);
