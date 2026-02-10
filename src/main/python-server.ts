export class PythonServer {
  private port = 5000;

  async start(): Promise<void> {
    // For MVP, Python backend is optional
    // All predictions use mock data in the frontend
    console.log('Python server - MVP mode (using mock data)');
  }

  stop(): void {
    // Nothing to stop in MVP mode
  }

  isRunning(): boolean {
    return true; // Mock server is always "running"
  }

  getBaseUrl(): string {
    return `http://localhost:${this.port}`;
  }
}
