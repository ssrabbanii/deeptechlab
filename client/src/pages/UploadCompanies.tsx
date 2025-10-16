import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Upload, CheckCircle, XCircle } from "lucide-react";

const UploadCompanies = () => {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    document.title = "Upload Company Data | Admin";
  }, []);

  const uploadMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("/api/ventures/upload", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || res.statusText);
      }
      
      return res.json();
    },
    onSuccess: (data: any) => {
      toast({
        title: "Upload Successful",
        description: `Successfully uploaded and created ${data.count} new company pages.`,
      });
      setFile(null);
      queryClient.invalidateQueries({ queryKey: ["/api/ventures"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Upload Failed",
        description: error.message || "Error uploading file. Please check the file format and column headers.",
        variant: "destructive",
      });
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = ["text/csv"];
      if (validTypes.includes(selectedFile.type) || selectedFile.name.endsWith('.csv')) {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please select a CSV file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No File Selected",
        description: "Please select a file to upload.",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    uploadMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader className="bg-gradient-to-r from-primary to-purple-700 text-white">
            <CardTitle className="text-2xl font-heading">
              Upload Company Data
            </CardTitle>
            <p className="text-white/90 mt-2">
              Upload a CSV file to bulk import company information
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg font-semibold mb-3">
                  File Format Requirements
                </h3>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2">
                    Your file must include the following column headers (exact match required):
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li><code className="bg-gray-200 px-1 rounded">Venture Name</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">Website</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">HKDTL Cohort</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">University KTO</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">Venture Value Proposition</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">Tech IP</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">Founders Background</code></li>
                    <li><code className="bg-gray-200 px-1 rounded">Seeking Stakeholders</code> (comma-separated: investors, customers, distribution, tech, hiring)</li>
                    <li><code className="bg-gray-200 px-1 rounded">Why Now</code></li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="file-upload" className="text-base font-semibold">
                  Select File
                </Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="file-upload"
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="flex-1"
                    data-testid="input-file-upload"
                  />
                  {file && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                {file && (
                  <p className="text-sm text-gray-600">
                    Selected: <strong>{file.name}</strong> ({(file.size / 1024).toFixed(2)} KB)
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button
                  onClick={handleUpload}
                  disabled={!file || uploadMutation.isPending}
                  className="bg-primary hover:bg-purple-700"
                  data-testid="button-upload"
                >
                  {uploadMutation.isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </>
                  )}
                </Button>
              </div>

              {uploadMutation.isError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800">Upload Failed</p>
                    <p className="text-sm text-red-600 mt-1">
                      {uploadMutation.error?.message || "Error uploading file. Please check the file format and column headers."}
                    </p>
                  </div>
                </div>
              )}

              {uploadMutation.isSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Upload Successful</p>
                    <p className="text-sm text-green-600 mt-1">
                      Successfully uploaded and created {(uploadMutation.data as any)?.count || 0} new company pages.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadCompanies;
