const workouts = []; // Array to store workout logs

function calculateTotalWorkouts() {
  return workouts.length;
}

function calculateTotalDuration(workouts) {
  // Implement logic to calculate total duration based on workout data
  // (placeholder for now)
  return 0;
}

class Workout {
  constructor(type, name, sets, reps) {
    this.type = type;
    this.name = name;
    this.sets = sets;
}