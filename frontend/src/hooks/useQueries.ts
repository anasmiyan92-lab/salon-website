import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Booking } from '../backend';

export function useGetSalonInfo() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['salonInfo'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getSalonInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllBookings() {
  const { actor, isFetching } = useActor();

  return useQuery<Booking[]>({
    queryKey: ['allBookings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBookings();
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

export function useSubmitBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      clientName: string;
      email: string;
      phone: string;
      service: string;
      preferredDate: string;
      preferredTime: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      await actor.submitBooking(
        params.clientName,
        params.email,
        params.phone,
        params.service,
        params.preferredDate,
        params.preferredTime,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allBookings'] });
    },
  });
}
