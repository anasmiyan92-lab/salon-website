import Time "mo:core/Time";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Order "mo:core/Order";

import MixinStorage "blob-storage/Mixin";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";


actor {
  include MixinStorage();

  // Initialize access control state (provided by the auth component)
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Booking form data type
  type Booking = {
    clientName : Text;
    email : Text;
    phone : Text;
    service : Text;
    preferredDate : Text;
    preferredTime : Text;
    timestamp : Time.Time;
  };

  module Booking {
    public func compare(booking1 : Booking, booking2 : Booking) : Order.Order {
      Int.compare(booking1.timestamp, booking2.timestamp);
    };
  };

  // Booking storage
  let bookings = Map.empty<Text, Booking>();

  // Submit a booking — open to anyone (guests included), no auth check needed
  public shared ({ caller }) func submitBooking(
    clientName : Text,
    email : Text,
    phone : Text,
    service : Text,
    preferredDate : Text,
    preferredTime : Text,
  ) : async () {
    if (clientName.isEmpty() or email.isEmpty() or phone.isEmpty() or service.isEmpty() or preferredDate.isEmpty() or preferredTime.isEmpty()) {
      Runtime.trap("All fields must be filled");
    };

    let timestamp = Time.now();
    let id = timestamp.toText();

    let booking : Booking = {
      clientName;
      email;
      phone;
      service;
      preferredDate;
      preferredTime;
      timestamp;
    };

    bookings.add(id, booking);
  };

  // Retrieve all bookings (admin only)
  public query ({ caller }) func getAllBookings() : async [Booking] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    bookings.values().toArray().sort();
  };

  // Constant salon info
  let salonAddress = "123 Main St, City, Country";
  let salonPhone = "+1 234 567 8900";
  let businessHours = "Mon-Fri: 9am - 7pm, Sat: 10am - 5pm";

  // Get salon info — public, no auth needed
  public query ({ caller }) func getSalonInfo() : async {
    address : Text;
    phone : Text;
    hours : Text;
  } {
    {
      address = salonAddress;
      phone = salonPhone;
      hours = businessHours;
    };
  };
};
