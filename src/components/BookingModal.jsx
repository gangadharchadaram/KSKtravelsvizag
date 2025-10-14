import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, User, Phone, Mail, MapPin, Users } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const BookingModal = ({ open, onOpenChange, bookingType, selectedItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    pickupLocation: '',
    numberOfPeople: '1',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const bookingData = {
      ...formData,
      bookingType,
      itemName: selectedItem?.name || 'General Booking',
      itemPrice: selectedItem?.price || 'N/A',
      bookingDate: new Date().toISOString(),
      id: Date.now()
    };

    const existingBookings = JSON.parse(localStorage.getItem('kskBookings') || '[]');
    existingBookings.push(bookingData);
    localStorage.setItem('kskBookings', JSON.stringify(existingBookings));

    toast({
      title: "Booking Confirmed! 🎉",
      description: `Your ${bookingType === 'car' ? 'car rental' : 'tour package'} booking has been received. We'll contact you shortly!`,
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      pickupLocation: '',
      numberOfPeople: '1',
      specialRequests: ''
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">
            {bookingType === 'car' ? 'Book Your Car' : 'Book Tour Package'}
          </DialogTitle>
          <DialogDescription>
            {selectedItem ? (
              <div className="mt-2 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                <p className="font-semibold text-gray-800">{selectedItem.name}</p>
                <p className="text-sm text-gray-600">{selectedItem.price}</p>
              </div>
            ) : (
              <p>Fill in your details to complete the booking</p>
            )}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center space-x-2">
                <User className="w-4 h-4 text-cyan-600" />
                <span>Full Name *</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="border-gray-300 focus:border-cyan-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Phone Number *</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 98765 43210"
                required
                className="border-gray-300 focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-600" />
              <span>Email Address</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="border-gray-300 focus:border-cyan-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-cyan-600" />
                <span>Travel Date *</span>
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                required
                className="border-gray-300 focus:border-cyan-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="numberOfPeople" className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-cyan-600" />
                <span>Number of People</span>
              </Label>
              <Input
                id="numberOfPeople"
                name="numberOfPeople"
                type="number"
                min="1"
                max="10"
                value={formData.numberOfPeople}
                onChange={handleInputChange}
                className="border-gray-300 focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pickupLocation" className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-600" />
              <span>Pickup Location *</span>
            </Label>
            <Input
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleInputChange}
              placeholder="Enter pickup address"
              required
              className="border-gray-300 focus:border-cyan-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests</Label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              placeholder="Any special requirements or requests..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-orange-500 hover:from-cyan-600 hover:via-blue-600 hover:to-orange-600 text-white font-semibold py-6 rounded-full"
            >
              Confirm Booking
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="px-8 border-2 border-gray-300 hover:bg-gray-50 rounded-full"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;